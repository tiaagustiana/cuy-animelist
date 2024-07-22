const HeaderMenu = ({ title }) => {
    return (
        <div className="p-8">
            <div className="text-center text-2xl text-color-primary">
                <h3 className="underline underline-offset-8">{title}</h3>
            </div>
        </div>
    )
}

export default HeaderMenu