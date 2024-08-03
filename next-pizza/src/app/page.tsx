import Image from "next/image";
import {Title, Container, SortPopup} from "@/components/shared";
import {Categories} from "@/components/shared/catigories"
import {Filters} from "@/components/shared/filter"
import {TopBar} from "@/components/shared/top-bar";
import {ProductCard} from "@/components/shared/product-cart";
import {ProductsGroupList} from "@/components/shared/products-group-list";

export default function Home() {
  return (<>
      <Container>
        <div className="mt-10">
          <Title text="Все пиццы" size="lg" className="font-extrabold"/>

        </div>
      </Container>
      <TopBar/>
      <Container>
        <div className="flex gap-16">
        <div className="w-[250px]">
          <Filters/>

        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList title="Пиццы" products={[{
              id:1,
              name:"Чизбургер-пицца",
              imageUrl: 'https://the-cafe.ru/wp-content/uploads/2020/11/523c10a1-464d-41ad-9d28-f414a009ae22.jpg',
              price:559,
              items: [{price:550}]
            },{
              id:2,
              name:"Не Чизбургер-пицца",
              imageUrl: 'https://the-cafe.ru/wp-content/uploads/2020/11/523c10a1-464d-41ad-9d28-f414a009ae22.jpg',
              price:559,
              items: [{price:550}]
            }]} categoryId={1}/>
            <ProductsGroupList title="Завтрак" products={[{
              id:1,
              name:"Чизбургер-пицца",
              imageUrl: 'https://the-cafe.ru/wp-content/uploads/2020/11/523c10a1-464d-41ad-9d28-f414a009ae22.jpg',
              price:559,
              items: [{price:550}]
            },{
              id:2,
              name:"Не Чизбургер-пицца",
              imageUrl: 'https://the-cafe.ru/wp-content/uploads/2020/11/523c10a1-464d-41ad-9d28-f414a009ae22.jpg',
              price:559,
              items: [{price:550}]
            },
              {
                id:3,
                name:"Чизбургер-пицца",
                imageUrl: 'https://the-cafe.ru/wp-content/uploads/2020/11/523c10a1-464d-41ad-9d28-f414a009ae22.jpg',
                price:559,
                items: [{price:550}]
              },{
                id:4,
                name:"Не Чизбургер-пицца",
                imageUrl: 'https://the-cafe.ru/wp-content/uploads/2020/11/523c10a1-464d-41ad-9d28-f414a009ae22.jpg',
                price:559,
                items: [{price:550}]
              }]} categoryId={2}/>
          </div>
        </div>
        </div>

      </Container>
  </>


  );
}
