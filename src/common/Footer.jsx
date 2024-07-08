import { footer } from "../data/Data";

function Footer() {
  return (
    <div>
      <div className="bg-gray-900">
        <div className="w-10/12 m-auto">
          <div className="flex justify-between py-14 gap-8">
            {footer.map((val, index) => (
              <div className="text-gray-300 w-2/6" key={index}>
                <h1 className="text-2xl mb-5 text-white">{val.header}</h1>
                <p>{val.content1}</p>
                <p>{val.content2}</p>
                <p>{val.content3}</p>
                <p>{val.content4}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
