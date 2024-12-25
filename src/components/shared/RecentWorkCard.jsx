const RecentWorkCard = ({ project }) => {
  return (
    <div
      className="group p-4 rounded-[16px] border-[1px] border-[#50505080] 
        bg-[linear-gradient(244.57deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]
        hover:bg-[linear-gradient(244.57deg,rgba(85,3,208,0.45)_0%,rgba(85,3,208,0)_100%)]
        transition-all duration-300"
    >
      <div className=" rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h3 className=" text-base mb-5 font-[font-r] ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED0C93] to-[#C80CED]">
              {project.title}
            </span>
          </h3>

          {/* Description */}
          <p className="text-[#BDBEC2] text-lg mb-5 font-[font-r]">
            {project.description}
          </p>

          {/* Associate Info - Simplified layout */}
          <div className="text-sm mb-5">
            <span className="text-[#B9BAC0] font-[font-r]">
              ___ Associated with
            </span>{' '}
            <span className="text-white font-[font-r] border-b border-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ED0C93] group-hover:to-[#C80CED] group-hover:border-[#C80CED]">
              {project.associate.name}
            </span>{' '}
            <span className=" text-[#B9BAC0] font-[font-r]">
              {project.associate.role}
            </span>
          </div>

          {/* Button - Simplified style */}
          <button className="text-[#F6F6FE] text-[14px] font-[font-m] bg-transparent px-6 py-3 flex items-center border-[1px] border-[#F6F6FE] rounded-full group-hover:bg-gradient-to-r group-hover:from-[#ED0C93] group-hover:to-[#C80CED] group-hover:border-none transition-all duration-300">
            Read the full story
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentWorkCard;
