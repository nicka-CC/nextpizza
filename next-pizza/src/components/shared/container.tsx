import Image from "next/image";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export const Container = ({ className, children }:{className?:string, children?:any}) => {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>;

}
