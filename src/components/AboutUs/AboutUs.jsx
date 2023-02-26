import {
  AboutList,
  AboutTitle,
  AboutText,
  AboutImage,
  AboutListItem,
  ItemWrappper,
  AboutLink,
  TextWrapper,
} from './AboutUs.styled';
import bakery from '../../images/bakery.webp';
import refreg from '../../images/refregerator.webp';
import cokies from '../../images/cokies.webp';

export default function AboutUs() {
  return (
    <>
      <AboutTitle>Наша місія</AboutTitle>
      <AboutList>
        <AboutListItem>
          <ItemWrappper>
            <TextWrapper>
              <AboutText>
                Кондитерська-пекарня «Франц Захер» була заснована влітку 2017
                року. Головною нашою метою було створення закладу, який би при
                виготовленні своєї продукції використовував виключно натуральні
                інгредієнти, сучасне обладнання та передові кондитерські
                технології в поєднанні з класичними рецептами та неперевершеною
                атмосферою Відня XIX століття, що навіюється дизайном закладу в
                австрійсько-баварському стилі.
              </AboutText>
              <AboutText>
                Пекарня названа в честь австрійського кондитера Франца Захера,
                який є винахідником однойменного торта «Захер». Саме цей
                шоколадний торт вважається типовим десертом-візитівкою
                віденської кухні і одночасно з тим - кулінарним шедевром та
                одним із найпопулярніших тортів у світі.
              </AboutText>
              <AboutText>
                Наші кулінари намагаються ні в чому не поступатись своїм
                віденським колегам та готують свої торти та інші смаколики з
                величезною любов'ю, вкладаючи в них свою душу та всю
                майстерність, створюючи в результаті неперевершені шедеври, що
                обов'язково смакуватимуть кожному з вас.
              </AboutText>
            </TextWrapper>
          </ItemWrappper>
          <ItemWrappper>
            <AboutImage src={bakery} alt="" />
          </ItemWrappper>
        </AboutListItem>
        <AboutListItem>
          <ItemWrappper>
            <TextWrapper>
              <AboutText>
                У нас кожен відвідувач зможе віднайти десерт на свій смак та
                вподобання. Крім того, при бажанні, можна одразу в магазині
                сісти за столик та зануритись атмосферу затишних віденьских
                кав'ярень, куштуючи десерт за філіжанкою ароматного еспресо,
                класичного капучино, чашечкою міцного англійського чорного чи
                запашного фруктового чаю.
              </AboutText>
              <AboutText>
                Саме в такий спосіб ми рекомендуємо вам проводити зустрічі з
                друзями чи, наприклад, здибанку з коханою людиною. Чи коли на
                вулиці вас застане дощем непередбачувана львівська погода - не
                засмучуйтесь, завітайте до нас на філіжанку кави з смачнющим
                тортиком або штруделем та дегустацію смачної зігріваючої
                фруктової наливки, лікеру, коньяку чи бренді - і настрій
                гарантовано до вас повернеться.
              </AboutText>
            </TextWrapper>
          </ItemWrappper>
          <ItemWrappper>
            <AboutImage src={refreg} alt="" />
          </ItemWrappper>
        </AboutListItem>

        <AboutListItem>
          <ItemWrappper>
            <TextWrapper>
              <AboutText>
                Наша пекарня вразить вас величезним асортиментом власного
                виробництва: сирні, шоколадні і фруктові торти, різноманітні
                штруделі, десерти, печиво та тістечка, широкий вибір
                хлібобулочних виробів, виготовлених виключно з натуральної
                сировини - органічного цільнозернового пшеничного борошна,
                висівок, насіння, горіхів та інших додатків.
              </AboutText>
              <AboutText>
                Детальніше ознайомитись з переліком пропонованої продукції ви
                можете в відповідному розділі нашого сайту
                <AboutLink to="/Products"> "Наша продукція"</AboutLink>.
              </AboutText>
            </TextWrapper>
          </ItemWrappper>
          <ItemWrappper>
            <AboutImage src={cokies} alt="" />
          </ItemWrappper>
        </AboutListItem>
      </AboutList>
    </>
  );
}
