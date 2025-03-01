import { LeftBarChapter } from "./LeftBarChapter"
import { RightBarChapter } from "./RightBarChapter"

export const BodyChapter = () => {
    return (
        <div className="flex h-full gap-2">
            {/* left bar */}
            <div className="flex-[2]">
                <LeftBarChapter/>
            </div>
            {/* right bar */}
            <div className="flex-1">
                <RightBarChapter/>
            </div>
        </div>
    )
}