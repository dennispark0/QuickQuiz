import useSwr from 'swr';

const ExampleTest = () => {
    const {data,error} = useSwr('/https://kanjiapi.dev/v1/',fetch);
}

export default ExampleTest;