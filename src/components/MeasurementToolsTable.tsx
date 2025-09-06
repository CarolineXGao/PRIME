import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Search, Filter } from 'lucide-react';
import { measurementTools, MeasurementTool } from '../data/measurementTools';

interface MeasurementToolsTableProps {
  setCurrentPage: (page: string) => void;
}

const MeasurementToolsTable = ({ setCurrentPage }: MeasurementToolsTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');

  // Get all unique domains for filter
  const allDomains = Array.from(
    new Set(measurementTools.flatMap(tool => tool.domains))
  ).sort();

  // Filter tools based on search and domain
  const filteredTools = measurementTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.targetPopulation.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDomain = selectedDomain === '' || tool.domains.includes(selectedDomain);
    
    return matchesSearch && matchesDomain;
  });

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
            Showing {filteredTools.length} of {measurementTools.length} measurement tools
          </p>
        </div>

        {/* Tools Table */}
        <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tool Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Target Population</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Domains</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Administration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Format</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Availability</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTools.map((tool, index) => (
                  <tr key={tool.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{tool.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600 max-w-xs">{tool.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{tool.targetPopulation}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {tool.domains.map(domain => (
                          <span
                            key={domain}
                            className="px-2 py-1 bg-[#2D6AA3] bg-opacity-10 text-[#2D6AA3] text-xs rounded-full"
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{tool.administrationTime}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{tool.format}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tool.availability === 'Open access' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tool.availability}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{tool.reference}</div>
                      {tool.link && (
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#2D6AA3] hover:text-[#1e4d73] text-xs mt-1"
                        >
                          View <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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