/**
 * RESPAD Mobile - Sistema de Padronização Pós-Desastre
 * Desenvolvido por: Daniel Lima da Paz
 * MJSP/SENASP/DIOPI/CGOI
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const SCENARIOS = [
  {
    id: 'flooding',
    name: 'Alagamento',
    icon: '\uD83C\uDF0A',
    color: '#3b82f6',
    description: 'Resposta a enchentes e inundacoes',
  },
  {
    id: 'earthquake',
    name: 'Terremoto',
    icon: '\uD83C\uDFDA\uFE0F',
    color: '#f59e0b',
    description: 'Resposta a abalos sismicos',
  },
  {
    id: 'fire',
    name: 'Incendio Florestal',
    icon: '\uD83D\uDD25',
    color: '#ef4444',
    description: 'Combate a incendios em vegetacao',
  },
  {
    id: 'hazmat',
    name: 'Produtos Perigosos',
    icon: '\u2622\uFE0F',
    color: '#eab308',
    description: 'Resposta a materiais perigosos',
  },
];

const CHECKLISTS = {
  flooding: [
    'Colete salva-vidas tipo III',
    'Capacete com lanterna',
    'Luvas impermeaveis',
    'Botas de borracha',
    'Corda de resgate (min. 50m)',
    'Kit de primeiros socorros',
    'Radio HT a prova d agua',
    'GPS portatil',
  ],
  earthquake: [
    'Capacete de resgate tipo III',
    'Oculos de protecao',
    'Luvas de couro reforcadas',
    'Botas com biqueira de aco',
    'Alavanca hidraulica',
    'Serra circular',
    'Kit de estabilizacao',
    'Radio HT dual band',
  ],
  fire: [
    'Roupa aluminizada',
    'Capacete com viseira',
    'Balaclava Nomex',
    'Luvas anti-chama',
    'Abafador McLeod',
    'Mochila costal (20L)',
    'Abrigo de emergencia',
    'Radio HT VHF',
  ],
  hazmat: [
    'Roupa de protecao nivel A',
    'Aparelho de respiracao autonoma',
    'Luvas de nitrilo duplas',
    'Botas quimicas',
    'Detector multigas',
    'Kit de contencao',
    'Manual ERG',
    'Piscina de descontaminacao',
  ],
};

function App() {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  const handleScenarioSelect = scenario => {
    setSelectedScenario(scenario);
    setCheckedItems({});
    Alert.alert(
      scenario.name,
      'Cenario selecionado! Verifique o checklist.',
      [{text: 'OK'}],
    );
  };

  const toggleChecklistItem = index => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleBack = () => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const totalItems = CHECKLISTS[selectedScenario.id].length;

    Alert.alert(
      'Voltar',
      `Voce completou ${checkedCount} de ${totalItems} itens.\n\nDeseja voltar?`,
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Voltar', onPress: () => setSelectedScenario(null)},
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1f2e" />

      <View style={styles.header}>
        <Text style={styles.title}>RESPAD</Text>
        <Text style={styles.subtitle}>
          Sistema de Padronizacao Pos-Desastre
        </Text>
        <Text style={styles.author}>Daniel Lima da Paz</Text>
        <Text style={styles.organization}>MJSP/SENASP/DIOPI/CGOI</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {!selectedScenario ? (
          <>
            <Text style={styles.sectionTitle}>
              Selecione o Tipo de Desastre
            </Text>

            {SCENARIOS.map(scenario => (
              <TouchableOpacity
                key={scenario.id}
                style={[
                  styles.scenarioCard,
                  {borderLeftColor: scenario.color},
                ]}
                onPress={() => handleScenarioSelect(scenario)}
                activeOpacity={0.7}>
                <Text style={styles.icon}>{scenario.icon}</Text>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{scenario.name}</Text>
                  <Text style={styles.cardDescription}>
                    {scenario.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <>
            <View style={styles.selectedHeader}>
              <Text style={styles.selectedIcon}>{selectedScenario.icon}</Text>
              <Text style={styles.selectedTitle}>{selectedScenario.name}</Text>
              <Text style={styles.checklistSubtitle}>
                Checklist de Equipamentos
              </Text>
            </View>

            {CHECKLISTS[selectedScenario.id].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.checklistItem}
                onPress={() => toggleChecklistItem(index)}
                activeOpacity={0.7}>
                <View style={styles.checkbox}>
                  {checkedItems[index] && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text
                  style={[
                    styles.checklistText,
                    checkedItems[index] && styles.checklistTextChecked,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBack}
              activeOpacity={0.7}>
              <Text style={styles.backButtonText}>← Voltar</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1419',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#1a1f2e',
    borderBottomWidth: 1,
    borderBottomColor: '#2d3748',
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    color: '#3b82f6',
    letterSpacing: 2,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
  },
  author: {
    fontSize: 11,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
  },
  organization: {
    fontSize: 10,
    color: '#475569',
    textAlign: 'center',
    marginTop: 2,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: 20,
    textAlign: 'center',
  },
  scenarioCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    marginBottom: 16,
    padding: 20,
    borderLeftWidth: 6,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    fontSize: 48,
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#94a3b8',
  },
  selectedHeader: {
    alignItems: 'center',
    marginBottom: 24,
    paddingVertical: 20,
    backgroundColor: '#1e293b',
    borderRadius: 16,
  },
  selectedIcon: {
    fontSize: 64,
    marginBottom: 12,
  },
  selectedTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#f1f5f9',
    marginBottom: 8,
  },
  checklistSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkmark: {
    color: '#3b82f6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checklistText: {
    flex: 1,
    fontSize: 15,
    color: '#e2e8f0',
  },
  checklistTextChecked: {
    textDecorationLine: 'line-through',
    color: '#64748b',
  },
  backButton: {
    backgroundColor: '#2563eb',
    padding: 18,
    borderRadius: 12,
    marginTop: 24,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default App;
