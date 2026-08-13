const CrosshairCorner = () => {
    return (
        <>
            <div className="absolute -top-2.5 -left-2.5 w-5 h-5 z-50">
                <span className="absolute top-1/2 left-0 w-full h-px bg-decorator -translate-y-1/2"></span>
                <span className="absolute left-1/2 top-0 h-full w-px bg-decorator -translate-x-1/2"></span>
            </div>
            <div className="absolute -top-2.5 -right-2.5 w-5 h-5 z-50">
                <span className="absolute top-1/2 left-0 w-full h-px bg-decorator -translate-y-1/2"></span>
                <span className="absolute left-1/2 top-0 h-full w-px bg-decorator -translate-x-1/2"></span>
            </div>
            <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 z-50">
                <span className="absolute top-1/2 left-0 w-full h-px bg-decorator -translate-y-1/2"></span>
                <span className="absolute left-1/2 top-0 h-full w-px bg-decorator -translate-x-1/2"></span>
            </div>
            <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 z-50">
                <span className="absolute top-1/2 left-0 w-full h-px bg-decorator -translate-y-1/2"></span>
                <span className="absolute left-1/2 top-0 h-full w-px bg-decorator -translate-x-1/2"></span>
            </div>
        </>
    )
}

export { CrosshairCorner as default };