import React from 'react';
import { FileUp, File } from 'lucide-react';

interface SharedFile {
  id: string;
  name: string;
  size: string;
  uploadedBy: string;
  timestamp: string;
}

const FileSharing = () => {
  const files: SharedFile[] = [
    {
      id: '1',
      name: 'training_data.csv',
      size: '2.3MB',
      uploadedBy: 'David',
      timestamp: '5m ago'
    }
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Handle file drop logic here
  };

  return (
    <div 
      className="border border-red-900/30 rounded-lg p-3"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex items-center gap-2 mb-3">
        <FileUp className="w-4 h-4 text-red-400" />
        <span className="text-sm text-red-400">Shared Files</span>
      </div>
      <div className="border-2 border-dashed border-red-900/30 rounded p-3 mb-3 text-center">
        <p className="text-xs text-red-400/70">Drag and drop files here</p>
      </div>
      <div className="space-y-2">
        {files.map((file) => (
          <div key={file.id} className="flex items-center gap-2 bg-black/20 rounded p-2">
            <File className="w-4 h-4 text-red-400/70" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-red-400 truncate">{file.name}</div>
              <div className="text-xs text-red-400/50">
                {file.size} • {file.uploadedBy} • {file.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileSharing;