const RecentWorkCard = ({ project }) => {
  return (
    <div className="group">
      <div className="bg-[#1E1B4B] rounded-2xl overflow-hidden ">
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Company Name */}
          <div className="text-[#E94DCA] text-sm mb-3">{project.company}</div>

          {/* Project Title */}
          <h3 className="text-white text-xl font-semibold mb-4">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-6">{project.description}</p>

          {/* Associate Info */}
          <div className="flex items-center justify-between">
            <div className="text-gray-400 text-sm">
              <span className="opacity-70">— Associated with </span>
              <span className="text-white">{project.associate.name}</span>
              <div className="text-xs opacity-70">{project.associate.role}</div>
            </div>

            <button className="text-white text-sm border border-gray-700 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
              Read the full story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorkCard;
