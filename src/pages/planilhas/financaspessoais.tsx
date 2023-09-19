import { Flex, Card, Text } from '@chakra-ui/react';
import Youtube from '../../components/Youtube';
import LinkTelegram from '../../components/LinkTelegram';

const financasPessoais = () => {
  return (
    <Flex flexDir='column' m={3} alignItems='center'>
      <Card p={3} alignItems='center' maxW='1000px'>
        <Text fontSize='4xl'>Planilha de Finanças Pessoais</Text>
        <Text my={4}>
          Organizar as suas finanças pode não ser a tarefa mais fácil do mundo,
          por isso eu fiz para te ajudar uma planilha completa e totalmente
          gratuita para te ajudar nessa missão, com ela você vai poder listar
          todas as suas despesas em um só lugar, separá-las por cartão de
          crédito, definir suas próprias metas de gastos e muito mais!
        </Text>
        <Youtube link='qkolQyUi_2Q' />
        <LinkTelegram link={'https://t.me/+41r05wYsophmMjBh'} />
      </Card>
    </Flex>
  );
};

export default financasPessoais;
