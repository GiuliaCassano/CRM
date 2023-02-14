// *** 5 *** Compilo e torno in formActivities
// *** 7 ** * Faccio nuovo component ListItemActivity

import { ListItemActivity } from "./ListItemActivity"

const ListActivity = ({propsContent}) => {
    return (
        <ul>
            {propsContent.map((elem, index) => {
                return (
                    <ListItemActivity propsContent= {elem} />
                )
            })}
        </ul>
    )
}
export {ListActivity}