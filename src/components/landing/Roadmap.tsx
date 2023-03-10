import {
    IRoadmapProps,
    roadmapList,
    RoadmapTitleColorType,
} from '@/const/roadmap'
import classNames from 'classnames'
import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

const RoadmapItem = ({
    roadmap,
    t,
}: { roadmap: IRoadmapProps } & WithTranslation) => {
    return (
        <div className="relative pl-11">
            <div className="absolute top-1 left-0 h-10 w-10">
                <img src="/images/icons/star.svg" alt="star" />
            </div>
            <div className="flex flex-col">
                <p
                    className={classNames(
                        'my-2 text-2xl',
                        roadmap.titleColor ===
                            RoadmapTitleColorType.LightGreen &&
                            'text-[#ABE661]',
                        roadmap.titleColor ===
                            RoadmapTitleColorType.LightBlue && 'text-[#84CAFF]',
                        roadmap.titleColor ===
                            RoadmapTitleColorType.BlueGreen && 'text-[#55EED2]'
                    )}
                >
                    {t(roadmap.titleKey)}
                </p>
                {roadmap.items.map((item) => (
                    <div
                        className="my-1 w-fit rounded-xl bg-[#1F3338] py-2 px-4 lg:rounded-3xl"
                        key={item.descKey}
                    >
                        <p className="mr-1 text-sm lg:text-base">
                            {t(item.descKey)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const TransRoadmapItem = withTranslation()(RoadmapItem)

const Roadmap = ({ t }: WithTranslation) => {
    return (
        <div className="ldp-container-root mb-20">
            <div className="ldp-container">
                <div className="flex flex-col items-center justify-center">
                    <p className="section-title">{t('roadmap-title')}</p>
                    <div className="relative mt-8 flex w-full max-w-[550px] flex-col gap-y-8">
                        {/* timeline */}
                        <div className="absolute left-[19px] h-full border" />
                        {roadmapList.map((roadmap) => (
                            <TransRoadmapItem
                                roadmap={roadmap}
                                key={roadmap.titleKey}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Roadmap)
