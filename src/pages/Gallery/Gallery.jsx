import { SliderWrapper } from './Gallery.styled';
import Slider from 'components/Slider';
import { Wrapper } from './Gallery.styled';

export default function Gallery({ screenWidth }) {
  let sliderWidth = null;
  if (screenWidth < 768) {
    sliderWidth = screenWidth * 0.8;
  } else {
    sliderWidth = screenWidth * 0.7;
  }

  return (
    <Wrapper>
      <SliderWrapper sliderWidth={sliderWidth}>
        <Slider />
      </SliderWrapper>
      <h3>Перелік нашої продукції... бла-бла-бла...</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga
        possimus provident! Hic laudantium nam, maiores unde dolore quis ipsum
        laborum dignissimos quidem doloribus odit eum tempora cupiditate!
        Delectus molestiae quaerat consequuntur magni tempora fuga eaque
        adipisci quas. Quis laudantium ipsum doloribus aut aperiam culpa maxime
        repellat suscipit veritatis aspernatur similique at deleniti recusandae
        enim corrupti molestiae hic, soluta doloremque sequi adipisci itaque
        nulla reprehenderit. Accusantium ipsa blanditiis a non, error nobis qui,
        odio sequi sunt voluptate quis veritatis temporibus placeat natus
        excepturi vero dignissimos numquam, tempore praesentium provident
        laborum facere ipsam. A maiores ad molestiae, ducimus magni modi ex.
        Commodi dicta necessitatibus eum, cupiditate vitae voluptatibus fuga
        voluptatum architecto maxime, iure pariatur laboriosam modi a enim
        provident mollitia sed, aliquam incidunt fugit soluta facilis nobis id
        reiciendis odit! Delectus quia, obcaecati nihil omnis quisquam provident
        aliquid ipsum iste ipsa numquam. Impedit neque minima iusto sequi.
        Reiciendis rem distinctio inventore ullam vel ipsam optio, aspernatur
        dolores? Optio iste et ducimus sunt nihil? Distinctio ab nisi nemo,
        enim, odio libero itaque fugit dolores error ea reprehenderit hic
        consequuntur praesentium quod voluptas nostrum quibusdam architecto
        rerum inventore debitis culpa incidunt? Incidunt quidem molestias
        nostrum explicabo excepturi deserunt illo rem assumenda eum autem
        veritatis, amet porro voluptate iure odit. Maiores laudantium inventore
        consectetur sequi quisquam reiciendis autem est molestias omnis rerum,
        fugit placeat officia dolores reprehenderit minus impedit? Excepturi
        quis voluptatum, mollitia tenetur accusantium soluta obcaecati nam
        velit? Cupiditate at autem dolorum voluptatum vitae eos inventore
        accusamus consectetur, repellat ipsam vero illo earum!
      </p>
    </Wrapper>
  );
}
