import { Card, Skeleton } from "antd";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import {
  calculatePriceFinal,
  convertPrice,
  convertToSlug,
} from "../../utils/utils";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
interface PropsCard {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
}

export default function CardComponent(props: PropsCard) {
  const { id, image, name, price, discount } = props;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Card
      loading={isLoading}
      id="card"
      hoverable
      cover={
        isLoading ? (
          <Skeleton.Node
            active
            style={{ width: "227px", height: "297px" }}
          ></Skeleton.Node>
        ) : (
          <div>
            <div className="cart-header">
              <div className="cart-header-content">
                <div>5</div>
                <FaStar style={{ color: "yellow" }} />
              </div>
              <div>Đã bán 171K</div>
            </div>
            <div className="card-image">
              <img width={"100%"} height={"297px"} src={image} alt="" />
            </div>
          </div>
        )
      }
      onClick={() =>
        navigate(`/product-detail/${convertToSlug(name)}`, { state: id })
      }
    >
      <div className="name">{name}</div>
      <div className="price-box">
        <span className={`price ${discount === 0 ? "" : "discount-price"}`}>
          {convertPrice(calculatePriceFinal(price, discount))}
        </span>
        {discount !== 0 && (
          <span className="compare-price">{convertPrice(price)}</span>
        )}
      </div>
    </Card>
  );
}
