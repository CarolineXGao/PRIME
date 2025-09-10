import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Search, Filter, ChevronDown, ChevronRight } from 'lucide-react';
import { detailedMeasurementTools, DetailedMeasurementTool } from '../data/detailedMeasurementTools';

interface MeasurementToolsTableProps {
  setCurrentPage: (page: string) => void;
}

const MeasurementToolsTable = ({ setCurrentPage }: MeasurementToolsTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [expandedTools, setExpandedTools] = useState<Set<string>>(new Set());

  // Get all unique domains for filter
  const allDomains = Array.from(
    new Set(detailedMeasurementTools.flatMap(tool => tool.domains))
  ).sort();

  // Filter tools based on search and domain
  const filteredTools = detailedMeasurementTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.targetPopulation.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDomain = selectedDomain === '' || tool.domains.includes(selectedDomain);
    
    return matchesSearch && matchesDomain;
  });

  const toggleExpanded = (toolId: string) => {
    const newExpanded = new Set(expandedTools);
    if (newExpanded.has(toolId)) {
      newExpanded.delete(toolId);
    } else {
      newExpanded.add(toolId);
    }
    setExpandedTools(newExpanded);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <button
          onClick={() => setCurrentPage('resources')}
          className="flex items-center text-[#2D6AA3] hover:text-[#1e4d73] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Resources
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Measurement Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Validated instruments and assessment tools for measuring climate-related mental health impacts in youth populations.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search measurement tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2D6AA3] focus:outline-none transition-colors"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="pl-10 pr-8 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2D6AA3] focus:outline-none transition-colors bg-white min-w-48"
            >
              <option value="">All Domains</option>
              {allDomains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTools.length} of {detailedMeasurementTools.length} measurement tools
          </p>
        </div>

        {/* Tools Cards */}
        <div className="space-y-6">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
              {/* Tool Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tool.availability === 'Open access' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tool.availability}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{tool.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span><strong>Population:</strong> {tool.targetPopulation}</span>
                      <span><strong>Time:</strong> {tool.administrationTime}</span>
                      <span><strong>Format:</strong> {tool.format}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {tool.link && (
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center transition-colors"
                      >
                        Open Access <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                    {tool.hasDetailedScale && (
                      <button
                        onClick={() => toggleExpanded(tool.id)}
                        className="bg-[#2D6AA3] hover:bg-[#1e4d73] text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center transition-colors"
                      >
                        {expandedTools.has(tool.id) ? 'Hide Scale' : 'View Full Scale'}
                        {expandedTools.has(tool.id) ? 
                          <ChevronDown className="w-4 h-4 ml-2" /> : 
                          <ChevronRight className="w-4 h-4 ml-2" />
                        }
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Domains */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {tool.domains.map(domain => (
                    <span
                      key={domain}
                      className="px-3 py-1 bg-[#2D6AA3] bg-opacity-10 text-[#2D6AA3] text-sm rounded-full"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Scale Content */}
              {expandedTools.has(tool.id) && tool.hasDetailedScale && tool.sections && tool.responseOptions && (
                <div className="p-6 bg-gray-50">
                  {tool.instructions && (
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-800 font-medium">{tool.instructions}</p>
                    </div>
                  )}
                  
                  {/* Scale Sections */}
                  {tool.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 p-3 bg-[#2D6AA3] bg-opacity-10 rounded-lg">
                        {section.title}
                      </h4>
                      
                      {/* Items Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="px-4 py-3 text-left font-semibold text-gray-900 border-r border-gray-300">
                                Item
                              </th>
                              {tool.responseOptions.map((option) => (
                                <th key={option.value} className="px-3 py-3 text-center font-semibold text-gray-900 border-r border-gray-300 min-w-[80px]">
                                  <div>{option.label}</div>
                                  <div className="text-xs text-gray-600">({option.value})</div>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.items.map((item, itemIndex) => (
                              <tr key={item.number} className={itemIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="px-4 py-3 border-r border-gray-300">
                                  <div className="flex items-start gap-3">
                                    <span className="font-semibold text-gray-700 mt-1">{item.number}.</span>
                                    <span className="text-gray-900">{item.text}</span>
                                  </div>
                                </td>
                                {tool.responseOptions.map((option) => (
                                  <td key={option.value} className="px-3 py-3 text-center border-r border-gray-300">
                                    <input
                                      type="radio"
                                      name={`item-${item.number}`}
                                      value={option.value}
                                      className="w-4 h-4 text-[#2D6AA3] focus:ring-[#2D6AA3]"
                                      disabled
                                    />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                  
                  {/* Reference */}
                  <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Reference:</h5>
                    <p className="text-sm text-gray-700">{tool.reference}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No measurement tools found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDomain('');
              }}
              className="mt-4 text-[#2D6AA3] hover:text-[#1e4d73] font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Using These Measurement Tools
          </h3>
          <div className="text-blue-800 space-y-3">
            <p>
              <strong>Open Access:</strong> Tools are freely available for research and clinical use.
            </p>
            <p>
              <strong>Contact Authors:</strong> Permission required from original authors before use.
            </p>
            <p>
              <strong>Administration:</strong> Most tools are self-report and can be administered digitally or on paper.
            </p>
            <p>
              <strong>Validation:</strong> All listed tools have undergone psychometric validation in relevant populations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasurementToolsTable;