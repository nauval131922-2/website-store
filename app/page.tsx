import getBanners from "@/actions/get-banner";
import Banner from "@/components/banner";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {

    const banner = await getBanners("f6d0ec55-6768-48fa-b8f8-907e8d19af04");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Banner data={banner}  />
            </div>
        </Container>
    )
}

export default HomePage