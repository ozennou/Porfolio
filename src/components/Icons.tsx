import React from 'react';

const icons = [
  'Argo CD.png', 'django.png', 'gcp.png', 'k8s.png', 'redis.svg',
  'SonarQube.png', 'docker.svg', 'git.svg', 'mysql-original-wordmark.svg', 'snyk.png',
  'ansible.png', 'elastic.png', 'github0.svg', 'postgres.png', 'terraform.svg',
  'Azure.png', 'file-type-nginx.svg', 'gitlab.png', 'python.png', 'trivy.svg',
  'bash.svg', 'file-type-prometheus.svg', 'GitHub Actions.png', 'grafana.svg', 'rabbitmq.png', 'ts.png',
  'cpp.png',  'jenkins.svg', 'react.svg', 'vagrant.svg', 'tfsec.svg', 'Kibana.png'
];

export default function Icons() {
  return (
    <div className="relative w-full overflow-hidden inline-flex flex-nowrap">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#191919] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#191919] to-transparent z-10"></div>
      <ul className='sliding-list flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none'>
        {icons.concat(icons).map((icon, index) => (
          <li className="flex justify-center items-center px-1" key={index}>
            <img
              src={`/icons/${icon}`}
              alt={icon}
              className="w-28 h-28 object-contain" 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
