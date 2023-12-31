import Order from "@/components/cards/Order";
import TableOrder from "@/components/forms/TableOrder";

import {  testfetch } from "@/lib/actions/order.action";
import { GetOrderByStatus, fetchListOrderOfUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { Status } from "@/contants/status";



const Page = async () => {
  const user = await currentUser()
  if(!user) return;
  

  
  const listOrder = await GetOrderByStatus(user.id, Status.wait);
  // const listOrder = await fetchListOrderOfUser(user.id)


  const order = listOrder.map((
    {
      description,
      receiverName,
      city,
      district,
      ward,
      phone,

    } : {
      description: any,
      receiverName: any,
      city: any,
      district: any,
      ward: any,
      phone: any,
    })=> ({
      description,
      receiverName,
      city,
      district,
      ward,
      phone,
    })
  )

    return (
        <>

        <TableOrder listOrder={order}/>
        
        
        </>
    )
}

export default Page;