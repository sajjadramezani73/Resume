
const Home = () => { }
export default Home

export async function getServerSideProps(context) {

  return {
    redirect: {
      permanent: false,
      destination: "/about"
    }
  }

}