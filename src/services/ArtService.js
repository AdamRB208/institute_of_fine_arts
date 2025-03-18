import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Art } from "@/models/Art.js";


class ArtService {
  async getArt() {
    const response = await api.get('api/artworks')
    logger.log('got art', response.data)
    const art = response.data.artworks.map(pojo => new Art(pojo))
    AppState.Art = art
  }
}

export const artService = new ArtService()