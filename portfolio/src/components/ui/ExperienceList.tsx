export default function ExperienceList(ListProps: { Company: string, Position: string[], Time: string[], Description?: string[] }) {
    function beforeElement() {
        return (
            <div className="h-[10px] w-[10px] bg-white rounded-[2px]"></div>
        );
    }


    function ListItems(ItemProps: { Position: string, Time: string, Description?: string }) {
        return (
            <li className="relative pl-6 
               before:absolute before:left-0 before:top-2 before:h-[10px] before:w-[10px] before:bg-white before:rounded-[2px] 
               after:absolute after:left-[4px] after:top-[19px] after:bottom-[-38px] after:w-[2px] after:bg-gray-500 last:after:hidden">
                <h3 className="font-lexend text-[20px] font-normal">{ItemProps.Position}</h3>
                <p className="font-lexend text-[16px] font-normal text-[#8f8f8f]">{ItemProps.Time}</p>
                {ItemProps.Description && (
                    <div className="description">
                        <p className="font-lexend text-[14px] font-light text-[#8f8f8f]">{ItemProps.Description}</p>
                    </div>
                )}
            </li>
        );
    }
    return (
        <div className="expList pb-4">
            <h2 className="font-lexend text-[24px] font-medium py-4 mt-2">{ListProps.Company}</h2>
            <div className="position">
                <ul className="gap-8 flex flex-col">
                    {ListProps.Position.map((position, index) => (
                        <ListItems key={index} Position={position} Time={ListProps.Time[index]} Description={ListProps.Description ? ListProps.Description[index] : undefined} />
                    ))}
                </ul>
            </div>
        </div>
    );
}