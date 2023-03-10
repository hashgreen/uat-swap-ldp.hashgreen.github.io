import { GALink, TempBg } from '@/components/common'
import { IGAProps } from '@/utils/ga'
import classNames from 'classnames'
import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

const LinkButton = ({
    category,
    action,
    label,
    src,
    alt,
    href,
    className,
    localeKey,
    t,
}: {
    src: string
    alt: string
    href: string
    className: string
    localeKey: string
} & IGAProps &
    WithTranslation) => {
    return (
        <GALink
            category={category}
            action={action}
            label={label}
            href={href}
            className={classNames(
                'flex w-full max-w-[285px] flex-row gap-x-3 rounded-xl px-5 py-3 uppercase',
                className
            )}
        >
            <img src={src} alt={alt} width={24} height={24} />
            <p className="text-lg">{t(localeKey)}</p>
        </GALink>
    )
}

const TransLinkButton = withTranslation()(LinkButton)

const Hero = ({ t }: WithTranslation) => {
    return (
        <div className="ldp-container-root relative z-0 h-screen">
            {/* region start temp bg */}
            <div className="absolute -z-10 h-full w-full lg:hidden">
                <TempBg size={160} />
            </div>
            <div className="absolute -z-10 hidden h-full w-full lg:block">
                <TempBg size={250} />
            </div>
            {/* region end temp bg */}
            <div className="ldp-container flex h-full flex-col items-center justify-center pt-10 text-center">
                <p className="text-5xl md:text-6xl">{t('hero-title')}</p>
                <p className="mt-4 text-base md:mt-10 md:text-2xl">
                    {t('hero-sub-title')}
                </p>
                <div className="mt-14 flex w-full flex-wrap justify-center gap-6 xl:mt-24">
                    <TransLinkButton
                        category="cta"
                        action="Click"
                        label="Click_hero-connect-to-discord"
                        href="https://"
                        src="/images/icons/discord.svg"
                        alt="discord"
                        className="bg-[#21B8E1]"
                        localeKey="common-join_community"
                    />
                    <TransLinkButton
                        category="cta"
                        action="Click"
                        label="Click_hero-connect-to-twitter"
                        href="https://"
                        src="/images/icons/twitter.svg"
                        alt="twitter"
                        className="border"
                        localeKey="common-follow_twitter"
                    />
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Hero)
