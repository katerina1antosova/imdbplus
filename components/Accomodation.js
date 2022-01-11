import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Accomodation.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

// const resolveDirectors = {
//   en: 'Directors',
//   cs: 'Režiséři',
// }

// const resolveWriters = {
//   en: 'Writers',
//   cs: 'Spisovatelé',
// }

// const resolveStars = {
//   en: 'Stars',
//   cs: 'Účinkuje',
// }

// const resolveMerchandise = {
//   en: 'Merchandise',
//   cs: 'Merch',
// }

// const resolveNews = {
//   en: 'News',
//   cs: 'Novinky',
// }

const Accomodation = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
    // var directors = data.rels.filter(obj => {
    //   return content.directors.includes(obj.uuid);
    // });
    // var stars = data.rels.filter(obj => {
    //   return content.stars.includes(obj.uuid);
    // });
    // var writers = data.rels.filter(obj => {
    //   return content.writers.includes(obj.uuid);
    // })
    // var studios = data.rels.filter(obj => {
    //   return content.studios.includes(obj.uuid);
    // })
    // var genres = data.rels.filter(obj => {
    //   return content.genres.includes(obj.uuid);
    // })
    // if (content.agerating) {
    //   var ageratings = data.rels.filter(obj => {
    //     return content.agerating.includes(obj.uuid);
    //   });
    // }
  } else {
    var content = data;
  }
  if (content.destination) {
    var destinations = data.rels.filter(obj => {
      return content.destination.includes(obj.uuid);
    });
  }

  // const [products, setProducts] = useState([]);
  // getData(data.story.uuid, locale, content.preview = false, 'product', 'movies').then(
  //   function (result) {
  //     setProducts(result.data.stories);
  //   });

  // const [newsitems, setNewsitems] = useState([]);
  // getData(data.story.uuid, locale, content.preview = false, 'newsitem', 'movies').then(
  //   function (result) {
  //     setNewsitems(result.data.stories);
  //   });

  // var pictures = content.pictures;

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.accomodation}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.accomodation}>
          <h2 className={styles.title}>
            {content.type}
          </h2>
          <div className={styles.accomodation}>
              <div className={styles.price}>
                {content.price}
              </div>
              <div className={styles.accomodation}>
              <div className={styles.price}>
                {content.distance_from_center}
              </div>
              <div className={styles.accomodation}>
          <h3 className={styles.title}>
            {content.rating}
          </h3>
          
          {/* <div className={styles.genrelist}>
            {genres.map((item, index) => (
              <div className={styles.genre}>
                {item.content.title}
              </div>
            ))}
          </div> */}
          {/* {ageratings && <div className={styles.ageratinglist}>
            {ageratings.map((item, index) => (
              <a href={`/${item.full_slug}`} key={item.content._uid}><div className={styles.agerating}>
                {item.content.title}
              </div></a>
            ))}
            </div>} */}
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          {/* <div className={styles.imagegallery}>
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
          </div>   */}

          {/* <div className={styles.short}>
            {render(content.short)}
          </div> */}
          <div className={styles.synopsis}>
            {render(content.description)}
          </div>
          {destinations && destinations.length > 0 && <SmallCardList items={destinations} title={"Destination"} type="destination"></SmallCardList>}
          {/* <div className={styles.peoplesegment}>
            <div className={styles.content}>
              {directors && directors.length > 0 && <RelatedItemGallerySmall items={directors} title={resolveDirectors[locale]} type="personality"></RelatedItemGallerySmall>}
              {writers && writers.length > 0 && <RelatedItemGallerySmall items={writers} title={resolveWriters[locale]} type="personality"></RelatedItemGallerySmall>}
              {stars && stars.length > 0 && <RelatedItemGallerySmall items={stars} title={resolveStars[locale]} type="personality"></RelatedItemGallerySmall>}
            </div>

          </div>

          {products && products.length > 0 && <SmallCardList items={products} title={resolveMerchandise[locale]} type="product"></SmallCardList>}
          {newsitems && newsitems.length > 0 && <SmallCardList items={newsitems} title={resolveNews[locale]} type="newsitem"></SmallCardList>} */}
        </div>
        </div>
        </div>
        </div>
        </div>
      </main>
    </SbEditable>
  )
}

export default Accomodation
