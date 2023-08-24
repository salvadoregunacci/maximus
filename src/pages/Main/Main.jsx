import React, {useEffect} from "react"
import Header from "../../components/Header.jsx";
import Promo from "./Screens/Promo/Promo.jsx";
import {gsap} from "gsap";
import {ScrollSmoother} from "gsap-trial/ScrollSmoother";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Main = () => {

    useEffect(()=> {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2.2
        })
    }, []);

    return (
        <>
            <Header/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Promo/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto aut consequuntur
                       dolores
                       explicabo incidunt iusto neque repellendus reprehenderit sit! Aperiam atque dolorem explicabo,
                       magnam
                       maiores nihil numquam quas quidem similique totam. Ipsa labore odio pariatur perferendis quaerat
                       quo
                       tenetur. Alias asperiores at consequatur deleniti eligendi eum explicabo id iusto laborum nihil
                       nisi,
                       nobis quaerat quas quo quos soluta sunt! Ad aut debitis ea eos ex facilis id optio, placeat
                       possimus
                       quae! A accusantium aliquam blanditiis cumque enim itaque neque obcaecati sed similique
                       veritatis. A
                       ab
                       amet beatae dolor dolore ea eaque earum eius enim facere facilis in ipsa ipsam magnam neque
                       numquam
                       odit
                       officia, possimus quaerat repudiandae sit tempore vel velit voluptate voluptatem. Culpa dolor
                       eaque
                       ipsa
                       ipsum necessitatibus nemo praesentium sint. Architecto, asperiores doloremque ducimus eius
                       necessitatibus
                       optio quos repellat voluptatibus. Alias amet blanditiis cumque cupiditate dolorem doloremque
                       dolores
                       eligendi esse est, eum explicabo fugiat id incidunt, inventore, magnam natus nemo nesciunt nulla
                       possimus
                       provident quam quos repellat rerum soluta suscipit temporibus veniam! Ad asperiores aspernatur
                       aut
                       error
                       ex minus odio officiis recusandae repudiandae voluptatibus. A ad asperiores earum enim labore
                       maiores
                       molestias quaerat, sit veritatis voluptatem? Accusamus accusantium aliquam animi aperiam
                       aspernatur
                       aut
                       error impedit inventore ipsa iusto laborum, molestias non placeat porro quasi quibusdam quod rem
                       repellat
                       rerum saepe sequi sunt temporibus voluptates. Accusantium aperiam delectus deserunt dolorem earum
                       eius
                       enim eos est in itaque laborum maiores molestias natus nisi numquam optio, pariatur perferendis
                       totam,
                       voluptate voluptatibus. Consectetur eligendi ex nam necessitatibus non nulla odio porro
                       repudiandae
                       vero
                       voluptates! A beatae, cum cumque deleniti dignissimos, doloribus ea enim eos est eveniet facilis
                       fugit
                       inventore ipsam iste laudantium libero molestiae nam natus nemo neque nobis non placeat possimus
                       quas
                       qui
                       quos ratione sint suscipit temporibus ullam? Aliquid assumenda blanditiis culpa dignissimos eum
                       id
                       illo
                       ipsum iusto, nisi officia quia quibusdam saepe sequi sit temporibus. A aliquam atque, cupiditate
                       debitis
                       dignissimos distinctio ea expedita facere fuga incidunt, iure quam quas quia quibusdam quo quod,
                       temporibus unde voluptate voluptatem voluptatum. Accusamus adipisci aliquid amet architecto at
                       blanditiis
                       consectetur deserunt dolores dolorum, explicabo fuga maxime nostrum obcaecati odio optio
                       perspiciatis
                       quae quasi quis quod ratione recusandae rem sequi, temporibus tenetur veniam voluptatibus
                       voluptatum!
                       Animi aut cumque debitis deleniti dolorem eaque et id illo natus nobis nostrum optio porro quae,
                       qui
                       quisquam quo saepe voluptatibus voluptatum! Accusantium cupiditate error id itaque molestiae
                       mollitia
                       provident quae rerum sit? Animi aperiam assumenda at commodi, cum cumque dignissimos distinctio
                       eligendi
                       explicabo illo modi nam nesciunt perferendis rem sed tenetur unde, vitae. Illo, incidunt, non!
                       Adipisci
                       magni nulla omnis perferendis qui sapiente! Asperiores aspernatur assumenda culpa cum est
                       laudantium
                       neque, non perspiciatis porro quibusdam soluta suscipit ut, veritatis. Ad debitis doloribus est
                       fuga
                       natus nulla, provident unde? Officia, reiciendis, voluptatem. Asperiores culpa debitis dolorum
                       eaque
                       ipsam magni modi porro, qui quidem ratione rem vel vitae. Assumenda ea esse excepturi expedita
                       illo
                       inventore modi officiis, omnis ut veritatis! Cum delectus, distinctio dolorum facere hic
                       laudantium
                       nesciunt, nihil odit possimus quidem sed suscipit tempore voluptates. Ad animi aperiam asperiores
                       beatae
                       consequatur debitis dolorem doloremque dolores eaque earum eos esse eum expedita facere fuga ipsa
                       iure
                       magni minus molestiae mollitia neque nihil non odit perspiciatis porro praesentium quaerat quam,
                       qui
                       quod
                       soluta suscipit tenetur ut vel velit vero vitae voluptatem! Adipisci animi aperiam asperiores
                       corporis,
                       deleniti deserunt distinctio dolor dolorem, doloremque eius enim et fuga harum illo in ipsa ipsam
                       ipsum
                       iusto labore magnam magni maiores maxime, nobis non nulla odio perferendis quia tempore ullam
                       voluptate!
                       A aspernatur aut consequuntur corporis cum debitis deleniti deserunt eligendi error eum eveniet
                       exercitationem expedita illum ipsum iure laboriosam magni modi mollitia natus porro provident,
                       quisquam
                       ratione repellendus saepe soluta suscipit vel velit? Asperiores in ullam vero vitae voluptatum!
                       Aliquid
                       aut beatae, culpa dicta dolor doloribus eveniet, hic, illum ipsum iste mollitia nesciunt nisi
                       omnis
                       quae
                       ratione recusandae reiciendis sed veniam voluptatem voluptatum! Aliquam commodi deleniti eligendi
                       in
                       libero odio quam sint voluptas. Adipisci aut distinctio ea facilis fugiat harum hic magnam
                       maiores
                       perspiciatis quae quisquam repellat, saepe unde veritatis voluptatem. Aliquam at autem beatae
                       blanditiis
                       consequuntur cumque dolore dolorem esse excepturi inventore ipsa ipsam iure, iusto laborum minima
                       mollitia nobis perferendis, placeat quia sed sint, voluptate voluptatibus? Facere, omnis,
                       perspiciatis.
                       Consequatur deserunt dignissimos harum incidunt ipsum maxime natus nostrum omnis, reprehenderit
                       saepe
                       sapiente veniam. Adipisci asperiores aut delectus doloribus ducimus et, harum hic illum inventore
                       ipsam
                       natus nemo odio omnis perferendis porro possimus quaerat ullam velit. Alias aliquam assumenda at
                       atque
                       beatae cumque deleniti dolor, dolore dolorem dolores doloribus eius, exercitationem harum
                       inventore
                       ipsam
                       labore laborum magni molestiae molestias nemo neque nisi nobis nostrum odio officiis perferendis
                       porro
                       praesentium quaerat quas reprehenderit similique suscipit tempore velit veniam vero voluptatem
                       voluptatibus! Ea ipsum labore modi nulla officia perferendis perspiciatis provident similique
                       tempora?
                       Aut cupiditate dolor facere labore tempora vero voluptas? Adipisci animi, assumenda blanditiis
                       consequuntur culpa dolore expedita illo illum impedit laudantium nesciunt, nulla provident quia
                       similique
                       soluta veniam voluptate? Animi architecto consequatur consequuntur minus, molestias natus neque
                       nesciunt
                       odit officia praesentium quasi repellendus repudiandae velit veritatis vero! A cumque debitis
                       deserunt
                       dolores eos eum ex, exercitationem expedita, itaque magnam magni maiores molestias mollitia
                       perferendis
                       quas rem saepe similique tenetur voluptates, voluptatum? Accusantium ad aliquid animi aperiam
                       corporis
                       dolore, dolorum ducimus ex exercitationem iste labore mollitia, nam natus nihil officia omnis
                       pariatur
                       quasi qui quod reiciendis repellat reprehenderit sapiente sequi sunt temporibus veniam vitae. Ad
                       alias
                       aliquid animi, assumenda at commodi corporis debitis delectus deleniti doloremque ex incidunt
                       iusto
                       libero maxime nam obcaecati optio pariatur porro possimus quas quasi quis, tempore tenetur vel,
                       voluptas.
                       Aliquam fuga incidunt laudantium necessitatibus provident, rerum suscipit. Accusantium cupiditate
                       facere
                       fugiat illo incidunt iusto mollitia quibusdam vitae! Accusamus adipisci amet eligendi itaque modi
                       necessitatibus possimus quo ratione sapiente voluptatibus. Accusantium consequuntur doloribus
                       facere
                       itaque maxime optio ratione reprehenderit? Animi aperiam beatae distinctio dolor doloremque
                       excepturi
                       ipsum iusto, officiis omnis quia quos ratione repellendus rerum, similique sint unde vero
                       voluptas?
                       Aliquid amet, autem culpa, delectus dolor ea eligendi eveniet excepturi facilis impedit maiores
                       natus
                       nostrum numquam obcaecati omnis qui sunt unde? Asperiores, temporibus, voluptates. Accusantium
                       alias
                       architecto asperiores autem, blanditiis culpa cum dolor et ipsam laborum laudantium minima modi
                       nihil
                       odio placeat possimus quidem ullam ut voluptate voluptates. Adipisci delectus deleniti distinctio
                       ea
                       fugit labore, minus nobis odit pariatur placeat quia quisquam ratione repellat, reprehenderit,
                       rerum
                       totam veniam veritatis? At blanditiis commodi dolore, enim est et ex, excepturi expedita fuga
                       fugiat
                       harum labore laudantium libero magni molestiae nemo non numquam officiis omnis, quia quidem quod
                       ullam
                       velit? Accusamus, aut commodi consequuntur cupiditate error excepturi fuga harum incidunt itaque
                       minus
                       neque nostrum officiis omnis quibusdam rem repellendus temporibus vero voluptates. Aliquam
                       aperiam
                       commodi consequatur, consequuntur culpa cum cumque dignissimos dolorem dolores ea et hic impedit
                       libero
                       minus mollitia porro voluptate. Cupiditate fugiat illum in odit placeat provident quae sint ut.
                       Aliquid
                       amet aut consequatur doloribus expedita fuga incidunt ipsum pariatur perspiciatis possimus quae
                       quis
                       soluta temporibus, veniam voluptates. Blanditiis culpa cupiditate eaque eos magni molestiae
                       numquam
                       possimus repellendus sequi, voluptate! A alias architecto blanditiis cumque enim excepturi
                       expedita
                       illo,
                       illum in ipsa iure, iusto officiis quas quisquam similique suscipit totam ullam veritatis
                       voluptatem
                       voluptates. Eveniet harum, ipsum itaque maxime molestiae optio quis quisquam reprehenderit
                       veritatis
                       voluptates! Aliquam at, atque consequatur ea eligendi ipsam libero necessitatibus nulla quod ut.
                       Aperiam
                       asperiores atque, aut, commodi consectetur deleniti distinctio, exercitationem explicabo hic id
                       impedit
                       ipsa labore neque possimus quia quidem quos rerum saepe sint suscipit velit vero voluptate! At
                       cupiditate
                       delectus esse eveniet facere illum laboriosam odit porro quisquam rerum? Ab aliquam aperiam
                       consectetur
                       corporis delectus dolores eius fugit inventore itaque iure, laboriosam magnam nam necessitatibus
                       nisi,
                       provident quia similique sunt velit! Amet blanditiis enim eveniet expedita maxime minus molestias
                       sit
                       unde, vero voluptas? Corporis nulla numquam optio pariatur quam, sit voluptatum. Adipisci autem,
                       blanditiis consequuntur cumque distinctio est, eum explicabo, facilis inventore iusto molestias
                       nisi
                       possimus quos recusandae soluta. A accusantium animi atque, autem consequatur dignissimos fugit
                       id
                       officia possimus quisquam temporibus velit voluptas voluptate? Ad animi dolore facere maiores
                       nihil
                       officia perspiciatis, provident quae quibusdam, recusandae, reiciendis suscipit tenetur
                       veritatis.
                       Accusamus adipisci animi assumenda commodi consequatur cupiditate distinctio est ex facere fugiat
                       inventore ipsam nam natus odio officia omnis quibusdam quo similique, sint unde. Enim minima
                       omnis
                       perspiciatis? Adipisci amet at consequuntur dolores error est exercitationem explicabo, harum
                       impedit
                       incidunt laborum modi nemo nostrum officia officiis optio pariatur porro quaerat quisquam quod
                       sapiente
                       sed sunt? Accusamus ad corporis cum facere incidunt iste iure, obcaecati. A asperiores fuga nisi
                       officia
                       sunt! Adipisci, beatae ducimus enim error fuga hic illo ipsa, itaque iusto laudantium odio
                       pariatur
                       placeat qui quidem repudiandae rerum ullam. Ad blanditiis corporis, culpa debitis delectus
                       deserunt
                       distinctio fugiat in libero maiores maxime minima mollitia natus nobis nulla odio odit
                       praesentium
                       quae
                       quibusdam quisquam quo quos rerum sequi. Consectetur cupiditate eligendi est eum itaque, porro
                       quidem
                       unde ut. Dignissimos earum facilis inventore laborum odit officia ratione repudiandae! Aliquam
                       dolore
                       ducimus ea, eius enim eveniet facilis fugiat libero minima nam neque obcaecati pariatur, rem sit
                       tempore?
                       Accusamus dolore dolores ducimus minima modi tempore voluptas voluptatibus. Dolor error fuga
                       harum
                       nam
                       sint tempore vel! Aliquam aspernatur consectetur dolores in quo. A ab asperiores distinctio earum
                       impedit
                       inventore numquam quas quod rem sunt! Aperiam asperiores corporis debitis dolorum error, et
                       fugiat,
                       iusto
                       laboriosam nemo nisi numquam placeat quis quo reprehenderit tempore. Eum, harum iste laboriosam
                       mollitia
                       necessitatibus nisi reiciendis. Alias amet consectetur eveniet expedita magnam nisi quaerat, quia
                       reiciendis rerum veniam? Aliquid consequatur consequuntur corporis dicta dolorem, enim eveniet,
                       excepturi
                       explicabo facilis inventore ipsum iusto laboriosam minus numquam omnis porro quaerat quis quo
                       quod
                       ratione reiciendis reprehenderit repudiandae, sequi sunt tempora veniam voluptate! Ab architecto
                       at,
                       dolorum fuga fugiat ipsum qui quisquam recusandae ullam voluptate. Deserunt fugiat fugit quam
                       quidem
                       reiciendis. Blanditiis deleniti inventore iusto nesciunt quod voluptates? Ab blanditiis
                       consequuntur,
                       cumque distinctio, ducimus illo libero perferendis, quas similique sit vero voluptatem?
                       Accusantium
                       cumque deserunt distinctio dolore ea eius et excepturi facere iste labore magnam, modi nam,
                       necessitatibus neque perspiciatis possimus praesentium quam repellat repudiandae rerum sit, unde
                       ut
                       veniam voluptate voluptatum. Consectetur dicta inventore itaque iusto, maxime natus officiis
                       repellat?
                       Aspernatur assumenda cumque dolore eius error, illo, ipsa, ipsum quis sed temporibus tenetur
                       voluptas. Ab
                       accusantium aliquid consectetur culpa dolores doloribus earum eum, excepturi in magni maiores
                       maxime,
                       minima obcaecati pariatur quos repellendus similique tempora vel, voluptas voluptatem.
                       Accusantium
                       asperiores, blanditiis consequatur cupiditate dolore doloribus ducimus ea enim eos eum explicabo
                       fuga
                       id
                       ipsam nam necessitatibus neque nobis non obcaecati odit perspiciatis provident, quis quos
                       recusandae
                       repellat suscipit? Animi architecto assumenda delectus ducimus eius, esse fugiat labore possimus
                       quia
                       quidem sit, vitae! Beatae dolore dolorem ducimus earum facilis inventore iure numquam
                       perspiciatis,
                       recusandae sequi? Aperiam beatae commodi cupiditate deserunt dignissimos doloremque enim iusto
                       labore
                       molestiae molestias, mollitia nihil nobis nulla odit perferendis porro quis ratione, rerum
                       tempore
                       ullam,
                       velit veniam veritatis vero! At commodi distinctio quas quia voluptatum. Dignissimos esse eveniet
                       expedita obcaecati qui quos. Accusamus aliquam consequuntur corporis, cum id inventore modi, nam
                       odio
                       placeat quaerat, quam saepe sint. Assumenda deserunt dignissimos error, est eveniet fugiat ipsum
                       possimus
                       quia. Animi ex iure laborum molestiae quibusdam quo voluptatem. Amet aperiam architecto
                       aspernatur at
                       aut
                       consequatur deserunt dignissimos distinctio ea eligendi enim ex, facilis libero magnam minima
                       nemo
                       neque
                       odit officiis omnis quo quod quos reprehenderit sed suscipit veritatis voluptas voluptatibus. At
                       aut
                       culpa cum cumque deleniti dolore enim esse est, inventore maxime nisi nobis odit repudiandae sit
                       tempore.
                       Accusantium atque autem delectus deleniti deserunt dolore dolores earum enim error est expedita
                       harum
                       id,
                       iure molestiae nihil nulla odio odit officiis possimus provident repellendus sit ullam veniam,
                       voluptatem
                       voluptatibus. Adipisci alias corporis culpa distinctio dolor, dolorum earum eum facilis fugiat
                       incidunt,
                       ipsam libero neque nostrum obcaecati placeat qui quo reiciendis rem, sapiente tempora temporibus
                       voluptate voluptates voluptatibus. Aperiam architecto aspernatur consectetur deleniti dignissimos
                       earum,
                       ex in ipsam laudantium molestiae nobis pariatur quaerat quasi quibusdam quod reiciendis totam
                       vitae
                       voluptatem. Accusantium alias aspernatur consequatur ducimus eum harum illo incidunt iste iure
                       minima
                       optio placeat porro quaerat qui quidem ratione repudiandae tempore temporibus voluptate,
                       voluptates?</p>
                </div>
            </div>
        </>
    );
};

export default Main;