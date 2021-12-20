import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/DestinationList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const DestinationList = ({ data, level, locale }) => {
  
  const [sortby, setSortby] = useState();
  

  const [items, setItems] = useState([])
  getAllItems('destination', locale, sortby).then(
    function (result) {
      setItems(result.data.stories);
    });

  return (
    <div className={styles.mainpart}>
      
        {items && items.length > 0 && <SmallCardList items={items} type="movie"></SmallCardList>}
      </div>
  )
};

export default DestinationList;
