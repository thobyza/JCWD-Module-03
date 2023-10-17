
import { Sidebar } from "../components/sidebar"
import { Timeline } from "../components/timeline"

export const HomePage = () => {
    return (
        <div className="grid grid-cols-4 divide-x h-screen">
            <Sidebar/>
            <Timeline/>
            <div className="col-span-1 py-6">C</div>
        </div>
    )
}