declare namespace videojs {
  export interface VideoJsPlayer {
    playlist: {
      (sources: Playlist[]): void;
      autoadvance(n: number): void;
      repeat(n: boolean): void;
      currentItem(): number;
      lastIndex(): number;
      next(): void;
    };
    eme(): void;

    muted(): boolean;
  }

  export interface Playlist {
    sources: PlaylistSource[];
    poster?: string;
  }

  export interface PlaylistSource {
    src: string;
    type?: string;
  }
}
