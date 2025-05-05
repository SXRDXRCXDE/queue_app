export default function ServiceCard({ id, name, price, paymentMethod, isSelected, onClick }) {
    const formattedPrice = price ? price.toLocaleString('ru-RU') : "Not available";

    return (
        <div className={'w-full'} onClick={onClick}>
            <div
                className={`duration-300 px-4 w-full h-20 rounded-xl flex items-center justify-between relative 
                ${isSelected ? 'bg-gradient-to-r from-[#4D40FF] to-[#7DC0FF]' : 'bg-gradient-to-r from-[#FF4040] to-[#FFFFFF]'}`}
            >
                <div className="flex flex-col text-white items-start text-start">
                    <span className="text-3xl line-clamp-1">{name}</span>
                    <span className="text-xl">{formattedPrice} so‘m</span>
                </div>

                {isSelected && (
                    <div className="px-4 py-0.5 text-[15px] text-[#6F9BFF] bg-[#FFFFFF] rounded-full">
                        <span>Tanlandi</span>
                    </div>
                )}
            </div>
        </div>
    );
}
