

const RectContainer = ({children, className, ...props}) => {
    return (
        <div className={className}>
            <div className='relative w-full pt-[100%]'>
                {/* circle */}
                <div className='absolute top-0 left-0 bottom-0 right-0'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default RectContainer