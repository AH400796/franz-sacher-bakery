import {
  AboutList,
  AboutTitle,
  AboutText,
  AboutImage,
  AboutListItem,
  ItemWrappper,
} from './AboutUs.styled';
import bakery from '../../image/bakery.jpg';
import refreg from '../../image/refregerator.jpg';
import cokies from '../../image/cokies.jpg';

export default function AboutUs() {
  return (
    <>
      <AboutTitle>Щось про нас...</AboutTitle>
      <AboutList>
        <AboutListItem>
          <ItemWrappper>
            <AboutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              facilis nobis accusamus quisquam adipisci, inventore
              exercitationem molestias perferendis nam voluptatum sint quis
              perspiciatis, a alias doloribus nulla odit veniam, maxime tenetur
              nisi commodi accusantium totam! Sunt mollitia iure, consectetur
              dolorem, modi odio, eum quisquam accusamus saepe sint ratione
              beatae illo.
            </AboutText>
          </ItemWrappper>
          <ItemWrappper>
            <AboutImage src={bakery} alt="" />
          </ItemWrappper>
        </AboutListItem>

        <AboutListItem>
          <ItemWrappper>
            <AboutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              facilis nobis accusamus quisquam adipisci, inventore
              exercitationem molestias perferendis nam voluptatum sint quis
              perspiciatis, a alias doloribus nulla odit veniam, maxime tenetur
              nisi commodi accusantium totam! Sunt mollitia iure, consectetur
              dolorem, modi odio, eum quisquam accusamus saepe sint ratione
              beatae illo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Fugit facilis nobis accusamus quisquam adipisci, inventore
              exercitationem molestias perferendis nam voluptatum sint quis
              perspiciatis, a alias doloribus nulla odit veniam, maxime tenetur
              nisi commodi accusantium totam! Sunt mollitia iure, consectetur
              dolorem, modi odio, eum quisquam accusamus saepe sint ratione
              beatae illo.
            </AboutText>
          </ItemWrappper>
          <ItemWrappper>
            <AboutImage src={refreg} alt="" />
          </ItemWrappper>
        </AboutListItem>

        <AboutListItem>
          <ItemWrappper>
            <AboutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              facilis nobis accusamus quisquam adipisci, inventore
              exercitationem molestias perferendis nam voluptatum sint quis
              perspiciatis, a alias doloribus nulla odit veniam, maxime tenetur
              nisi commodi accusantium totam! Sunt mollitia iure, consectetur
              dolorem, modi odio, eum quisquam accusamus saepe sint ratione
              beatae illo.
            </AboutText>
          </ItemWrappper>
          <ItemWrappper>
            <AboutImage src={cokies} alt="" />
          </ItemWrappper>
        </AboutListItem>
      </AboutList>
    </>
  );
}
