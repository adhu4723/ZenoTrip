
import Button from "./Button";



export default function TransportCards({data}) {
  return (
    <div className="w-[310px]">
     
        <div
          className="rounded-2xl  overflow-hidden shadow-lg bg-white border border-gray-200"
        >
          <img
            src={data.image}
            alt={data.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4 space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">{data.title}</h3>
            <p className="text-2xl font-bold text-orange-500">
              ₹ {data.price} <span className="text-sm font-normal">/day</span>
            </p>
            <ul className="space-y-2">
              {data.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <feature.icon className="w-4 h-4 text-orange-500" />
                  {feature.text}
                </li>
              ))}
            </ul>
           <Button label={'Book Now'}/>
          </div>
        </div>
     
    </div>
  );
}