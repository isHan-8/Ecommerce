import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/component/ProductDetail";
import Footer from "../features/common/Footer";
function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default ProductDetailPage;