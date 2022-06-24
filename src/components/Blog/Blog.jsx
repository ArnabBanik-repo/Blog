import "./blog.css";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
const Blog = () => {
  return (
    <section className="container blog__container">
      <div className="title">
        We know moving to a new city can be tough. You're not familiar with
        anything, it's a strange place and you haven't managed to find a coffee
        shop yet.
      </div>
      <div className="para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        veniam in omnis similique dolore dolores id nesciunt temporibus vitae
        hic voluptates ad eum voluptas magnam atque nulla, explicabo perferendis
        facilis! Maiores, necessitatibus dolore odio molestiae a voluptates
        praesentium quisquam nam magni et beatae totam! Eligendi quas accusamus
        ut voluptatibus itaque et, laudantium necessitatibus culpa ipsa aut
        asperiores, perferendis dolores totam provident earum. Minima ullam
        debitis expedita tenetur veniam eos itaque, qui illo rem nesciunt
        accusantium veritatis, dolorum in. Aliquid, quae!
      </div>
      <div className="para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore tenetur
        quo fugit culpa tempora dolores laudantium libero exercitationem
        <a href=""> voluptatem</a>, ab ipsa, nam corporis ad veniam. Sit
        tempora, praesentium ex eligendi asperiores nisi officiis assumenda
        tempore minus dolor deleniti, officia odit. Quam vel at, veniam iure
        ipsam atque tempora quasi blanditiis sequi omnis quod voluptatibus
        incidunt voluptate, nam voluptates nesciunt mollitia voluptatum quia
        illo aperiam iste earum minima! Ratione tempora, voluptate quis at
        tenetur omnis vero vitae, explicabo, deserunt cum sed numquam
        laudantium. Delectus, commodi. Ut sit reiciendis corporis, possimus
        incidunt, dolores doloremque dignissimos, delectus dolorum explicabo
        modi tempora cumque vero!
      </div>
      <div className="blog-img">
        <img src={blog1} alt="" />
      </div>
      <div className="title">Entertainment</div>
      <div className="para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odio quam
        eius voluptate quos, repellendus quibusdam necessitatibus libero itaque,
        vel numquam aliquam laborum fugit, nisi aperiam odit quod rem magnam.
        Minus distinctio iste dolorem vero pariatur? Architecto numquam
        accusamus amet voluptatum perferendis dignissimos magni? Quos rem soluta
        ad dolore cumque!
      </div>
      <div className="para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        voluptates totam corrupti impedit, provident nisi voluptatibus
        exercitationem eaque ab facilis error ipsam repellat! Velit consequatur
        expedita asperiores eos, eaque id non esse assumenda quisquam
        repudiandae quis aut quos dolore sit culpa ullam ipsum hic sequi amet
        quibusdam dignissimos <a href="">laboriosam</a> obcaecati! Veritatis
        sequi eveniet totam saepe aspernatur voluptatem et excepturi beatae
        voluptatum perspiciatis cum accusamus aliquid a qui, dolor corporis.
        Reiciendis!
      </div>
      <div className="blog-img">
        <img src={blog2} alt="" />
      </div>
      <div className="title">Sport</div>
      <div className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        sapiente corporis. Fugit odio commodi numquam! Voluptatum laboriosam
        porro labore accusantium quas facere aliquid, excepturi facilis delectus
        error temporibus quidem asperiores!
      </div>
      <div className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim adipisci
        libero repudiandae quaerat possimus voluptatum nisi est aperiam hic
        perferendis deserunt eligendi rerum iste fuga, earum accusantium! Eius
        tempore molestias incidunt consequuntur iste eaque, quibusdam officiis
        sunt nostrum facere minus quasi? Repudiandae nobis mollitia, omnis ipsam
        magnam tempore corporis.
      </div>
      <div className="blog-img">
        <img src={blog3} alt="" />
      </div>
      <div className="title">Transport</div>

      <div className="para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        voluptates totam corrupti impedit, provident nisi voluptatibus
        exercitationem eaque ab facilis error ipsam repellat! Velit consequatur
        expedita asperiores eos, eaque id non esse assumenda quisquam
        repudiandae quis aut quos dolore sit culpa ullam ipsum hic sequi amet
        quibusdam dignissimos <a href="">laboriosam</a> obcaecati! Veritatis
        sequi eveniet totam saepe aspernatur voluptatem et excepturi beatae
        voluptatum perspiciatis cum accusamus aliquid a qui, dolor corporis.
        Reiciendis!
      </div>

      <div className="tags">
        <p>
          TAGS: <a href="">LIFESTYLE</a>
        </p>
      </div>
    </section>
  );
};

export default Blog;
