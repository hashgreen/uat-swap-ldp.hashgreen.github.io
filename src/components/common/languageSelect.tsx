import classNames from 'classnames'
import React, { useState } from 'react'

interface IProps {
    className?: string
}

interface ILanguageProps {
    name: string
    code: string
}

const languageList: ILanguageProps[] = [
    {
        name: 'English',
        code: 'en',
    },
    {
        name: '繁體中文',
        code: 'zh-tw',
    },
    {
        name: '简体中文',
        code: 'cn',
    },
]

const MenuItem = ({
    item,
    handleClick,
}: {
    item: ILanguageProps
    handleClick: (code: string) => void
}) => {
    return (
        <div
            className="h-full cursor-pointer py-3 px-4 text-base text-white hover:bg-[#35464B]"
            onClick={() => {
                handleClick(item.code)
            }}
        >
            <p>{item.name}</p>
        </div>
    )
}

const LanguageSelect = ({ className }: IProps) => {
    const [open, setOpen] = useState<boolean>(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleItemClick = (code: string) => {
        console.log(code)
    }

    return (
        <div
            className={classNames(
                className,
                'relative flex items-center justify-center'
            )}
        >
            <div
                className="relative h-7 w-7 cursor-pointer"
                onClick={handleToggle}
            >
                <img src="/images/icons/language.svg" alt="language" />
            </div>
            {open && (
                <div className="absolute -bottom-3 right-0 w-[180px] translate-y-full rounded-xl border border-[#2A525E] bg-[#0B2127] py-3">
                    {languageList.map((language) => (
                        <MenuItem
                            key={language.code}
                            item={language}
                            handleClick={handleItemClick}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSelect