const OpenToCard = ({ service }) => {
  return (
    <div
      className={`group p-6 rounded-[16px] border-[1px] border-[#50505080] 
        bg-[linear-gradient(244.57deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]
        hover:bg-[linear-gradient(244.57deg,rgba(85,3,208,0.45)_0%,rgba(85,3,208,0)_100%)]
        transition-all duration-300`}
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="text-white text-[16px] mb-6 font-[font-m] group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#ED0C93] to-[#C80CED] ">
            {service.type}
          </p>
          <h3 className="text-[#B9BAC0] text-xl mb-6 font-[font-b]">
            {service.title}
          </h3>
        </div>

        <button
          className={`text-white text-[14px] font-[font-b] bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.05)] px-6 py-3 border-[1px] border-[#F6F6FE] rounded-full w-full group-hover:bg-gradient-to-r group-hover:from-[#ED0C93] group-hover:to-[#C80CED] group-hover:border-none transition-all duration-300`}
        >
          {service.action}
        </button>
      </div>
    </div>
  );
};

export default OpenToCard;
