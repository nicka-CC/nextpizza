import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/title";
import {Categories} from "@/components/shared/catigories";
import {SortPopup} from "@/components/shared/sort-pop-up";
import {Container} from "@/components/shared/index"

export const TopBar = ({className} : {className?:string}) =>{
  return(
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container>
        <Categories/>
        <SortPopup/>
      </Container>

    </div>
  )
}