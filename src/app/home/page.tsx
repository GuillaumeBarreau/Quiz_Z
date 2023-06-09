import scrumDev from '../../assets/images/scrumdev.svg';

export default function Page() {
  return (
    <div
      style={{
        height: '100vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <Heading marginBottom={4}>Choose a category to get started</Heading>
      <SimpleGrid spacing={4} margin={4}>
        <SubjectCard
          imgSrc={scrumDev}
          imgAlt="An illustration of a random cat"
          subject="scrumDev"
          navigate="scrumDev"
        />
        <SubjectCard
          imgSrc={scrumDev}
          imgAlt="An illustration of a random cat"
          subject="AWS Cloud Practitioner"
          navigate="AWSCloudPractitioner"
        />
      </SimpleGrid> */}
      <a href="/quiz/scrumDev" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">scrumDev</h2>
        <p className="font-normal text-gray-700 dark:text-gray-400">Professional Scrum Developer I (PSD I) Practice Tests Exams Questions & Answers</p>
      </a>
    </div>
  );
};
