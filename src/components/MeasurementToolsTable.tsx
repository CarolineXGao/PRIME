import React from 'react';
import { ArrowLeft, ExternalLink, Clock, Users, FileText } from 'lucide-react';
import { measurementTools } from '../data/measurementTools';

interface MeasurementToolsTableProps {
  setCurrentPage: (page: string) => void;
}

const MeasurementToolsTable: React.FC<MeasurementToolsTableProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <button
          onClick={() => setCurrentPage('resources')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Resources
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Measurement Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Validated instruments for assessing climate-related mental health outcomes
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {measurementTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {tool.name}
                </h3>
                {tool.link && (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 ml-2 flex-shrink-0"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {tool.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="font-medium">Target:</span>
                  <span className="ml-1">{tool.targetPopulation}</span>
                </div>

                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="w-4 h-4 mr-2 text-green-600" />
                  <span className="font-medium">Time:</span>
                  <span className="ml-1">{tool.administrationTime}</span>
                </div>

                <div className="flex items-start text-sm text-gray-700">
                  <FileText className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                  <div>
                    <span className="font-medium">Format:</span>
                    <span className="ml-1">{tool.format}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {tool.domains.map((domain, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {domain}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      tool.availability === 'Open access' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {tool.availability}
                    </span>
                  </div>
                  
                  {tool.reference && (
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      {tool.reference}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Using These Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">For Researchers</h3>
              <p className="text-sm">
                These validated instruments can be used in research studies to assess climate-related mental health outcomes. 
                Please cite the original references when using these tools.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">For Clinicians</h3>
              <p className="text-sm">
                These tools can help screen and assess climate-related anxiety and distress in clinical settings. 
                Consider training and supervision when implementing new assessment tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementToolsTable;