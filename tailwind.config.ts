const config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './ui/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
        }
    },
    plugins: [
        function ({ addUtilities }: { addUtilities: (utilities: any, options?: any) => void }) {
            const newUtilities = {
                '.scrollbar-webkit': {
                    'scrollbar-width': '8px',
                    'scrollbar-height': '96px',
                    '&::-webkit-scrollbar': {
                        height: '96px',
                        width: '8px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'var(--primary)',
                        borderRadius: '10px 0 0 10px'
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent'
                    }
                }
            }
            addUtilities(newUtilities)
        }
    ]
}

export default config