import React, { useEffect, useRef, useState } from "react";

export const ScrollPage = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const elementRef = useRef(null);

  const fetchMoreItems = async () => {
    if (!hasMore) return;

    // 20개의 항목을 한 번에 추가
    const newProducts = Array.from({ length: 20 }, (_, i) => ({
      id: page * 20 + i,
      name: `Product ${page * 20 + i + 1}`,
    }));

    setProducts((prevProducts) => [...prevProducts, ...newProducts]);

    // 페이지 번호를 증가시키기만 하여 제한 없이 무한히 데이터가 추가되도록 설정
    setPage((prevPage) => prevPage + 1);
    console.log(page);
    console.log(products.length);
  };

  const onIntersection = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreItems();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, { threshold: 1 });
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasMore, page]);

  return (
    <div>
      <h2>Infinite Scroll</h2>
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ padding: "10px", border: "1px solid #ddd" }}
          >
            {product.name}
          </div>
        ))}
      </div>
      <div ref={elementRef} style={{ height: "20px", marginTop: "10px" }} />
    </div>
  );
};
