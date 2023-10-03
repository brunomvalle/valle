import {
  Flex,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightElement,
  Select,
  Button,
  Card,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Heading,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import LineChart from "./LineChart";

type tableRowInterface = {
  mes: number;
  juros: number;
  totalInvestido: number;
  totalJuros: number;
  totalAcumulado: number;
};

function mostraValor(valor: number) {
  return (
    "R$ " +
    valor
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
}

const Calculadora = () => {
  const table: tableRowInterface[] = [];
  const [tableData, setTableData] = useState<tableRowInterface[]>([]);

  const [startingValue, setStartingValue] = useState<number>();
  const handleStartingValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setStartingValue(parseFloat(e.target.value));

  const [monthlyValue, setMonthlyValue] = useState<number>();
  const handleMonthlyValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMonthlyValue(parseFloat(e.target.value));

  const [interest, setInterest] = useState<number>();
  const handleInterestChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInterest(parseFloat(e.target.value));

  const [period, setPeriod] = useState<number>();
  const handlePeriodChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPeriod(parseFloat(e.target.value));

  const [totalFinal, setTotalFinal] = useState<string>("R$ 0,00");
  const [totalInvestido, setTotalInvestido] = useState<string>("R$ 0,00");
  const [totalInterest, setTotalInterest] = useState<string>("R$ 0,00");

  const [interestTime, setInterestTime] = useState<string>("a");
  const handleInterestTimeChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setInterestTime(e.target.value);

  const [periodTime, setPeriodTime] = useState<string>("a");
  const handlePeriodTimeChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setPeriodTime(e.target.value);

  const onSubmit = () => {
    table.length = 0;

    table.push({
      mes: 0,
      juros: 0,
      totalInvestido: startingValue || 0,
      totalJuros: 0,
      totalAcumulado: startingValue || 0,
    });

    const periodTimeSelected = periodTime == "m" ? 1 : 12;
    const interestSelected =
      interestTime == "m"
        ? interest || 0
        : (Math.pow(1 + (interest || 0) / 100, 1 / 12) - 1) * 100;
    for (let i = 0; i < period * periodTimeSelected; i++) {
      const row = table[table.length - 1];

      const juros = row.totalAcumulado * interestSelected * 0.01;
      const totalInvestido = row.totalInvestido + (monthlyValue || 0);
      const totalJuros = row.totalJuros + juros;
      const totalAcumulado = totalInvestido + totalJuros;
      table.push({
        mes: i + 1,
        juros: juros,
        totalInvestido: totalInvestido,
        totalJuros: totalJuros,
        totalAcumulado: totalAcumulado,
      });
    }
    setTotalFinal(mostraValor(table[table.length - 1].totalAcumulado));
    setTotalInvestido(mostraValor(table[table.length - 1].totalInvestido));
    setTotalInterest(mostraValor(table[table.length - 1].totalJuros));
    setTableData(table);
  };

  const clearData = () => {
    setInterest(0);
    setStartingValue(0);
    setMonthlyValue(0);
    setPeriod(0);
    setTotalFinal("R$ 0,00");
    setTotalInvestido("R$ 0,00");
    setTotalInterest("R$ 0,00");
    setInterestTime("m");
    setPeriodTime("m");
    setTableData([]);
    setTableData([]);
  };

  return (
    <Flex
      px={8}
      py={10}
      width="100%"
      maxWidth="1000px"
      flexDir="column"
      mb={12}
      alignItems="center"
      border="1px solid"
      borderColor="borderColor"
      borderRadius={8}
      boxShadow="dark-lg"
    >
      <Heading fontSize="2xl" mb={5}>
        Simulador de Juros Compostos
      </Heading>
      <Flex className="calculadora" flexDir="column" mb={4}>
        <Flex flexDir={["column", "column", "column", "row", "row"]}>
          <Flex
            w="100px"
            justifyContent={["start", "start", "start", "end", "end"]}
            mr={2}
            alignItems="center"
          >
            <Text>Valor inicial</Text>
          </Flex>
          <InputGroup w={300} mb={2}>
            <InputLeftAddon children="R$" />
            <Input
              type="number"
              value={startingValue}
              placeholder="0,00"
              onChange={handleStartingValueChange}
            />
          </InputGroup>
          <Flex
            w="100px"
            justifyContent={["start", "start", "start", "end", "end"]}
            mr={2}
            alignItems="center"
          >
            <Text>Valor mensal</Text>
          </Flex>
          <InputGroup w={300} mb={2}>
            <InputLeftAddon children="R$" />
            <Input
              type="number"
              value={monthlyValue}
              placeholder="0,00"
              onChange={handleMonthlyValueChange}
            />
          </InputGroup>
        </Flex>
        <Flex flexDir={["column", "column", "column", "row", "row"]}>
          <Flex
            w="100px"
            justifyContent={["start", "start", "start", "end", "end"]}
            mr={2}
            alignItems="center"
          >
            <Text>Taxa de juros</Text>
          </Flex>
          <InputGroup w={300} mb={2}>
            <InputLeftAddon children="%" />
            <Input
              type="number"
              value={interest}
              placeholder="0"
              onChange={handleInterestChange}
            />
            <InputRightElement w="30">
              <Select
                defaultValue={1}
                borderLeftRadius={0}
                value={interestTime}
                onChange={handleInterestTimeChange}
              >
                <option value="m">Mensal</option>
                <option value="a">Anual</option>
              </Select>
            </InputRightElement>
          </InputGroup>
          <Flex
            w="100px"
            justifyContent={["start", "start", "start", "end", "end"]}
            mr={2}
            alignItems="center"
          >
            <Text>Período</Text>
          </Flex>
          <InputGroup w={300} mb={2}>
            <Input
              type="number"
              value={period}
              placeholder="0"
              onChange={handlePeriodChange}
            />
            <InputRightElement w="30">
              <Select
                defaultValue={1}
                borderLeftRadius={0}
                value={periodTime}
                onChange={handlePeriodTimeChange}
              >
                <option value="m">Mes(es)</option>
                <option value="a">Ano(s)</option>
              </Select>
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex justifyContent="space-between">
          <Button variant="outline" w={20} onClick={onSubmit}>
            Calcular
          </Button>

          <Button variant="outline" w={20} onClick={clearData}>
            Limpar
          </Button>
        </Flex>
      </Flex>
      <Flex flexDir="column">
        <Text>Resultado</Text>
        <Flex flexDir={["column", "column", "row", "row"]}>
          <Flex
            flexDir="column"
            border="1px"
            borderColor="borderColor"
            borderRadius="md"
            p="3"
            w={200}
          >
            <Text>Valor total final</Text>
            <Text fontSize="2xl">{totalFinal}</Text>
          </Flex>
          <Flex
            flexDir="column"
            border="1px"
            borderColor="borderColor"
            borderRadius="md"
            p="3"
            my={[4, 4, 0, 0]}
            mx={[0, 0, 4, 4]}
            w={200}
          >
            <Text>Valor total investido</Text>
            <Text fontSize="2xl">{totalInvestido}</Text>
          </Flex>
          <Flex
            flexDir="column"
            border="1px"
            borderColor="borderColor"
            borderRadius="md"
            p="3"
            w={200}
          >
            <Text>Total em juros</Text>
            <Text fontSize="2xl">{totalInterest}</Text>
          </Flex>
        </Flex>
        {!!tableData.length && <LineChart data={tableData} />}
      </Flex>
      {!!tableData.length && (
        <Card mt={5} overflowX="auto" maxW="100%">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Mês</Th>
                  <Th>Juros</Th>
                  <Th>Total Investido</Th>
                  <Th>Total Juros</Th>
                  <Th>Total Acumulado</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tableData.map((row) => (
                  <Tr>
                    <Td>{row.mes}</Td>
                    <Td>{mostraValor(row.juros)}</Td>
                    <Td>{mostraValor(row.totalInvestido)}</Td>
                    <Td>{mostraValor(row.totalJuros)}</Td>
                    <Td>{mostraValor(row.totalAcumulado)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      )}
    </Flex>
  );
};

export default Calculadora;
