import { Flex, Card, Text } from '@chakra-ui/react';
import LinkAmazon from '../components/LinkAmazon';
import LinkTelegram from '../components/LinkTelegram';

const investimentosInteligentes = () => {
  return (
    <Flex flexDir='column' m={3} alignItems='center'>
      <Card p={3} alignItems='center' maxW='1000px'>
        <Text fontSize='4xl'>O que é Investimento?b</Text>
        <Text my={4}>
          Segundo Gustavo Cerbasi, Investir é <strong>MULTIPLICAR.</strong>
        </Text>
        <Text my={4}>
          Esta é somente uma das muitas lições que você vai adquirir lendo o
          livro "Investimentos Inteligentes", que na minha opnião, é o melhor
          livro para quem está começando ou quer começar a investir.
        </Text>
        <Text my={4}>
          Não, eu não estou exagerando, este livro pode ser o melhor
          investimento da sua vida! O autor te passa conhecimento para que você
          multiplique seu patrimônio com as opções de investimentos disponíveis
          no mercado, desde renda fixa até ações e previdência privada, tudo
          isso usando conceitos que qualquer pessoa leiga no assunto consiga
          entender. Veja só alguns dos tópicos do seu livro.
        </Text>
        <Text my={4}>
          <ul>
            <li>Investir é multiplicar</li>
            <li>Obstáculos ao investidor iniciante</li>
            <li>O que não fazer</li>
            <li>Estratégias inteligêntes em renda fixa</li>
            <li>Estratégia inteligentes com ações</li>
            <li>Estratégia inteligentes com imóveis</li>
          </ul>
        </Text>
        <Text my={4}>
          E no meio do caminho você ainda aprende sobre SELIC, IPC-A, CDB,
          Clubes de Investimentos, entre outras siglas ou girias utilizadas no
          mercado financeiro. E ai, está esperando o que para aprender tudo
          isso?
        </Text>
        <LinkAmazon
          link={
            'https://www.amazon.com.br/Aquecedor-Termo-Ceramic-Mondial-Cinza/dp/B077PXBYZ8'
          }
        />
      </Card>
    </Flex>
  );
};

export default investimentosInteligentes;
