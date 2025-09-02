import heapq
import networkx as nx
import matplotlib.pyplot as plt

def dijkstra_com_caminho(grafo, origem):
    distancias = {no: float('inf') for no in grafo}
    anteriores = {no: None for no in grafo}
    distancias[origem] = 0

    fila = [(0, origem)]

    while fila:
        dist_atual, no_atual = heapq.heappop(fila)

        if dist_atual > distancias[no_atual]:
            continue

        for vizinho, peso in grafo[no_atual].items():
            nova_dist = dist_atual + peso
            if nova_dist < distancias[vizinho]:
                distancias[vizinho] = nova_dist
                anteriores[vizinho] = no_atual
                heapq.heappush(fila, (nova_dist, vizinho))

    return distancias, anteriores

def reconstruir_caminho(anteriores, destino):
    caminho = []
    while destino is not None:
        caminho.append(destino)
        destino = anteriores[destino]
    return list(reversed(caminho))

def desenhar_grafo_com_caminhos(grafo, origem, anteriores):
    G = nx.Graph()  # Não-direcionado

    # Adiciona arestas com pesos
    for no in grafo:
        for vizinho, peso in grafo[no].items():
            G.add_edge(no, vizinho, weight=grafo[no][vizinho])

    pos = nx.spring_layout(G, seed=42)  # Layout fixo

    # Desenha o grafo base
    plt.figure(figsize=(10, 8))
    nx.draw(G, pos, with_labels=True, node_color='lightblue', node_size=800, font_weight='bold')
    labels = nx.get_edge_attributes(G, 'weight')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)

    # Destaca os caminhos mais curtos de origem até cada outro nó
    for destino in grafo:
        if destino == origem:
            continue
        caminho = reconstruir_caminho(anteriores, destino)
        if len(caminho) > 1:
            edges = list(zip(caminho[:-1], caminho[1:]))
            nx.draw_networkx_edges(G, pos, edgelist=edges, edge_color='red', width=2.5, alpha=0.7)

    plt.title(f"Caminhos mais curtos a partir de {origem}")
    plt.axis('off')
    plt.show()

# ----------------------------------
# EXEMPLO DE USO
# ----------------------------------

grafo = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1, 'E': 3},
    'D': {'B': 5, 'C': 1, 'E': 1},
    'E': {'C': 3, 'D': 1}
}

origem = 'A'

# Executa Dijkstra
distancias, anteriores = dijkstra_com_caminho(grafo, origem)

# Exibe distâncias e caminhos
for destino in grafo:
    caminho = reconstruir_caminho(anteriores, destino)
    print(f"Menor caminho de {origem} até {destino}: {' -> '.join(caminho)} (Distância: {distancias[destino]})")

# Visualiza todos os caminhos
desenhar_grafo_com_caminhos(grafo, origem, anteriores)
