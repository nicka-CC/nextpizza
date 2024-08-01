import Image from "next/image";
import {Title, Container, SortPopup} from "@/components/shared";
import {Categories} from "@/components/shared/catigories"
import {Filters} from "@/components/shared/filter"
import {TopBar} from "@/components/shared/top-bar";

export default function Home() {
  return (<>
      <Container>
        <div className="mt-10">
          <Title text="Все пиццы" size="lg" className="font-extrabold"/>

        </div>
      </Container>
      <TopBar/>
      <Container>
        <div className="w-[250px]">
          <Filters/>
        </div>
      </Container>
  </>


  );
}
