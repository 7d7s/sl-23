import BlogImg from '../assets/img/page-header-bg.jpg';
import Banner from '../components/Banner'

function Blog() {
  return (
    <div>
      <Banner title="Blog" subtitle="Home / Blog" backgroundImage={BlogImg}/>
    </div>
  )
}

export default Blog
