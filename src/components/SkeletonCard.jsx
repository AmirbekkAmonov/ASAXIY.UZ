import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
    return (
        <div
            className="product-card"
            style={{
                background: "#ffffff",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
            }}
        >
            <Skeleton
                height={200}
                baseColor="#f3f3f3"
                highlightColor="#e0e0e0"
                style={{ borderRadius: "10px" }}
            />
            <Skeleton
                count={2}
                style={{ marginTop: 10, borderRadius: "5px" }}
                baseColor="#f3f3f3"
                highlightColor="#e0e0e0"
            />
            <Skeleton
                width={100}
                height={20}
                style={{ marginTop: 10, borderRadius: "5px" }}
                baseColor="#f3f3f3"
                highlightColor="#d9d9d9"
            />
            <Skeleton
                width="60%"
                height={40}
                style={{ marginTop: 10, borderRadius: "5px" }}
                baseColor="#f3f3f3"
                highlightColor="#e0e0e0"
            />
        </div>
    );
};

export default SkeletonCard;
