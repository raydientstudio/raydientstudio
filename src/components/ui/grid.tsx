import {
    createContext,
    useContext,
    useMemo,
    type CSSProperties,
    type HTMLAttributes,
    type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * ── Responsive value plumbing ────────────────────────────────────────────
 * `columns`/`rows`/`column`/`row` all accept either a single value or a
 * `{ sm, md, lg }` object. Breakpoints fall upward (md falls back to sm,
 * lg falls back to md) so you only have to specify where a value changes —
 * this assumes column/row counts only grow as the viewport grows, which
 * covers the overwhelming majority of real grids; a non-monotonic scale
 * (e.g. more columns on tablet than desktop) isn't supported.
 */
type Breakpoint = "xs" | "sm" | "md" | "lg";
type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

function isResponsiveObject<T>(value: ResponsiveValue<T>): value is Partial<Record<Breakpoint, T>> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function resolveResponsive<T>(value: ResponsiveValue<T> | undefined, fallback: T): Record<Breakpoint, T> {
    if (value === undefined) return { xs: fallback, sm: fallback, md: fallback, lg: fallback };
    if (isResponsiveObject(value)) {
        const xs = value.xs ?? fallback
        const sm = value.sm ?? xs;
        const md = value.md ?? sm;
        const lg = value.lg ?? md;
        return { xs, sm, md, lg };
    }
    return { xs: value, sm: value, md: value, lg: value };
}

/** Like `resolveResponsive`, but for GridCell: an unset `sm` genuinely means "no explicit placement at this breakpoint" rather than falling back to some default position. */
function resolveCellPosition(value: ResponsiveValue<CellPosition> | undefined): Partial<Record<Breakpoint, CellPosition>> | undefined {
    if (value === undefined) return undefined;
    if (isResponsiveObject(value)) {
        const xs = value.xs;
        const sm = value.sm ?? xs;
        const md = value.md ?? sm;
        const lg = value.lg ?? md;
        return { xs, sm, md, lg };
    }
    return { xs: value, sm: value, md: value, lg: value };
}

// Static, complete class strings — Tailwind's JIT scanner needs the full
// class text to appear literally in source. Building these by concatenating
// a runtime prefix (e.g. `${bp}grid-cols-[...]`) would silently fail to
// compile, so every responsive variant is spelled out in full below instead.
const GRID_COLS_CLASSES = "grid-cols-[repeat(var(--grid-cols-sm),minmax(0,1fr))] md:grid-cols-[repeat(var(--grid-cols-md),minmax(0,1fr))] lg:grid-cols-[repeat(var(--grid-cols-lg),minmax(0,1fr))]";
const GRID_ROWS_CLASSES = "grid-rows-[repeat(var(--grid-rows-sm),minmax(0,1fr))] md:grid-rows-[repeat(var(--grid-rows-md),minmax(0,1fr))] lg:grid-rows-[repeat(var(--grid-rows-lg),minmax(0,1fr))]";
const ASPECT_RATIO_CLASSES = "aspect-[var(--grid-cols-sm)/var(--grid-rows-sm)] md:aspect-[var(--grid-cols-md)/var(--grid-rows-md)] lg:aspect-[var(--grid-cols-lg)/var(--grid-rows-lg)]";

/** Visible from the smallest breakpoint where `index` still falls inside the column/row count, and at every larger one — relies on the monotonic assumption above. */
function visibilityClasses(index: number, counts: Record<Breakpoint, number>): string {
    if (index < counts.xs) return ""
    if (index < counts.sm) return "hidden sm:block";
    if (index < counts.md) return "hidden md:block";
    if (index < counts.lg) return "hidden lg:block";
    return "hidden";
}

// ── GridSystem — shared guide styling for everything nested inside it ────

interface GridSystemContextValue {
    guideWidth: number;
    dashedGuides: boolean;
}

const GridSystemContext = createContext<GridSystemContextValue>({
    guideWidth: 1,
    dashedGuides: false,
});

function useGridSystem() {
    return useContext(GridSystemContext);
}

interface GridSystemProps {
    children: ReactNode;
    /** Guide line thickness in px. */
    guideWidth?: number;
    /** Dashed instead of solid guide lines. */
    dashedGuides?: boolean;
    /**
     * Wraps children in `@container` so a nested Grid can be styled against
     * its own box (via your own `@sm:`/`@md:`/`@lg:` utilities) instead of
     * the viewport. Grid's own columns/rows breakpoints stay viewport-based
     * either way — this only sets up the container for your own overrides.
     */
    useContainerQueries?: boolean;
    className?: string;
}

function GridSystem({
    children,
    guideWidth = 1,
    dashedGuides = false,
    useContainerQueries = false,
    className,
}: GridSystemProps) {
    const value = useMemo(
        () => ({ guideWidth, dashedGuides }),
        [guideWidth, dashedGuides]
    );

    return (
        <GridSystemContext.Provider value={value}>
            <div className={cn(useContainerQueries && "@container", className)}>{children}</div>
        </GridSystemContext.Provider>
    );
}

// ── Grid ───────────────────────────────────────────────────────────────

interface GridProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    columns?: ResponsiveValue<number>;
    rows?: ResponsiveValue<number>;
    /** `"auto"` sizes from content/children (default). `"preserveAspectRatio"` locks the box to the columns:rows ratio — use this for a decorative grid with no cells. */
    height?: "auto" | "preserveAspectRatio";
    hideGuides?: "none" | "row" | "column";
    /** Overrides the GridSystem-level value for this Grid only. */
    dashedGuides?: boolean;
    /** Overrides the GridSystem-level value for this Grid only. */
    guideWidth?: number;
    children?: ReactNode;
}

function Grid({
    columns,
    rows,
    height = "auto",
    hideGuides = "none",
    dashedGuides,
    guideWidth,
    className,
    style,
    children,
    ...props
}: GridProps) {
    const system = useGridSystem();
    const resolvedDashed = dashedGuides ?? system.dashedGuides;
    const resolvedGuideWidth = guideWidth ?? system.guideWidth;

    const cols = resolveResponsive(columns, 1);
    const rows_ = resolveResponsive(rows, 1);
    const maxCols = Math.max(cols.xs, cols.sm, cols.md, cols.lg);
    const maxRows = Math.max(rows_.xs, rows_.sm, rows_.md, rows_.lg);

    const cssVars = {
        "--grid-cols-xs": cols.xs,
        "--grid-cols-sm": cols.sm,
        "--grid-cols-md": cols.md,
        "--grid-cols-lg": cols.lg,
        "--grid-rows-xs": cols.xs,
        "--grid-rows-sm": rows_.sm,
        "--grid-rows-md": rows_.md,
        "--grid-rows-lg": rows_.lg,
        "--guide-width": `${resolvedGuideWidth}px`,
    } as CSSProperties;

    const guideLineClass = cn("border-border", resolvedDashed && "border-dashed");

    return (
        <div className={cn("relative bg-surface", height === "preserveAspectRatio" && ASPECT_RATIO_CLASSES, className)} style={{ ...cssVars, ...style }} {...props}>
            {hideGuides !== "column" && (
                <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 z-0 grid border-l-(length:--guide-width)", GRID_COLS_CLASSES, guideLineClass)}>
                    {Array.from({ length: maxCols }).map((_, i) => (
                        <div key={i} className={cn("border-r-(length:--guide-width)", guideLineClass, visibilityClasses(i, cols))} />
                    ))}
                </div>
            )}
            {hideGuides !== "row" && (
                <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 z-0 grid grid-cols-1 border-t-(length:--guide-width)", GRID_ROWS_CLASSES, guideLineClass)}>
                    {Array.from({ length: maxRows }).map((_, i) => (
                        <div key={i} className={cn("border-b-(length:--guide-width)", guideLineClass, visibilityClasses(i, rows_))} />
                    ))}
                </div>
            )}
            <div className={cn("relative z-10 grid h-full w-full", GRID_COLS_CLASSES, GRID_ROWS_CLASSES)}>
                {children}
            </div>
        </div>
    );
}

// ── GridCell ───────────────────────────────────────────────────────────

type CellPosition = number | `${number}` | `${number}/${number}`;

function toGridLine(pos: CellPosition | undefined): string | undefined {
    if (pos === undefined) return undefined;
    const str = String(pos);
    if (str.includes("/")) {
        const [start, end] = str.split("/");
        return `${start} / ${end}`;
    }
    const start = Number(str);
    return `${start} / ${start + 1}`;
}

interface GridCellProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    column?: ResponsiveValue<CellPosition>;
    row?: ResponsiveValue<CellPosition>;
    /** Paints a background behind the cell so guide lines don't show through it. */
    solid?: boolean;
    children?: ReactNode;
}

function GridCell({ column, row, solid = false, className, style, children, ...props }: GridCellProps) {
    const col = resolveCellPosition(column);
    const rowPos = resolveCellPosition(row);

    const cssVars = {
        ...(col && {
            "--gc-col-sm": toGridLine(col.sm),
            "--gc-col-md": toGridLine(col.md),
            "--gc-col-lg": toGridLine(col.lg),
        }),
        ...(rowPos && {
            "--gc-row-sm": toGridLine(rowPos.sm),
            "--gc-row-md": toGridLine(rowPos.md),
            "--gc-row-lg": toGridLine(rowPos.lg),
        }),
    } as CSSProperties;

    return (
        <div data-slot="grid-cell" className={cn("flex items-center justify-center", col && "col-(--gc-col-sm) md:col-(--gc-col-md) lg:col-(--gc-col-lg)", rowPos && "row-(--gc-row-sm) md:row-(--gc-row-md) lg:row-(--gc-row-lg)", solid && "bg-background", className)} style={{ ...cssVars, ...style }} {...props}>
            {children}
        </div>
    );
}

// ── GridCross ──────────────────────────────────────────────────────────

interface GridCrossProps {
    /** Guide line number (1-indexed) to center on horizontally. */
    column: number;
    /** Guide line number (1-indexed) to center on vertically. */
    row: number;
    className?: string;
}

/**
 * A small "+" mark centered on a guide intersection. Reads the ambient
 * `--grid-cols-*`/`--grid-rows-*` custom properties from the nearest `Grid`
 * ancestor (they inherit down through the DOM), so it stays correctly
 * positioned across breakpoints even though `column`/`row` themselves are a
 * single fixed value — matching how Geist's own reference uses it.
 */
function GridCross({ column, row, className }: GridCrossProps) {
    const style = {
        "--gx": column,
        "--gy": row,
    } as CSSProperties;

    return (
        <span
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2",
                "left-[calc((var(--gx)-1)/var(--grid-cols-sm)*100%)] md:left-[calc((var(--gx)-1)/var(--grid-cols-md)*100%)] lg:left-[calc((var(--gx)-1)/var(--grid-cols-lg)*100%)]",
                "top-[calc((var(--gy)-1)/var(--grid-rows-sm)*100%)] md:top-[calc((var(--gy)-1)/var(--grid-rows-md)*100%)] lg:top-[calc((var(--gy)-1)/var(--grid-rows-lg)*100%)]",
                "before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:bg-border",
                "after:absolute after:top-1/2 after:left-0 after:h-px after:w-full after:-translate-y-1/2 after:bg-border",
                className
            )}
            style={style}
        />
    );
}

// ── GridPage ───────────────────────────────────────────────────────────

interface GridPageProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    /** Max content width; the page is centered and gutters fill the rest. */
    maxWidth?: string;
}

function GridPage({ children, maxWidth = "1280px", className, style, ...props }: GridPageProps) {
    return (
        <div className={cn("mx-auto w-full px-4 md:px-6 lg:px-8", className)} style={{ maxWidth, ...style }} {...props}>
            {children}
        </div>
    );
}

export { GridSystem, Grid, GridCell, GridCross, GridPage, useGridSystem };
export type { GridSystemProps, GridProps, GridCellProps, GridCrossProps, GridPageProps };