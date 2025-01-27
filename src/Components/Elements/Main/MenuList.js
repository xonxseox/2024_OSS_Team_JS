import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import useMenu from "../../Status/MenuStatus";
import MenuCard from "./MenuCard";
import { ClipLoader } from "react-spinners";

export default function MenuList() {
  const menus = useMenu((state) => state.filteredMenus);
  const isSearching = useMenu((state) => state.isSearching);

  if (isSearching) {
    return (
      <Container className="d-flex justify-content-center">
        <ClipLoader />
      </Container>
    );
  }

  if (!menus || menus.length === 0) {
    return (
      <Container>
        <h1 className="fs-3 text-center mb-2">검색 결과가 없습니다</h1>
        <h1 className="fs-3 text-center">레시피를 검색해보세요 :&#41;</h1>
      </Container>
    );
  }

  return (
    <Container>
      <Row sm={2} md={3} lg={3} xl={4}>
        {menus.map((menu) => {
          return <MenuCard key={menu.RCP_SEQ} menu={menu}></MenuCard>;
        })}
      </Row>
    </Container>
  );
}
