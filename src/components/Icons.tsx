import React from 'react';

// List of icons
const icons = [
  'ts.png',
  'python.png',
  'django.png',
  'k8s.png',
  'ansible.png',
  'cpp.png',
  'azure.png',
  'elastic.png',
  'git.svg',
  'gitlab.png',
  'react.svg',
  'terraform.svg',
  'gcp.png',
  'github0.svg',
  'jenkins.svg',
  'postgres.png',
  'rabbitmq.png',
  'snyk.png',
];

export default function Icons() {
  return (
    <div className="my-10 overflow-hidden relative">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {icons.map((icon, index) => (
          <div className="flex justify-center items-center px-1" key={index}>
            <img
              src={`/icons/${icon}`}
              alt={icon}
              className="w-24 h-24 object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
