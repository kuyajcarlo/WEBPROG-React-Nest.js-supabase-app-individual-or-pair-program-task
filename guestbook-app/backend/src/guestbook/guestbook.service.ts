import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class GuestbookService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    // This pulls the values directly from your .env file
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');

    if (!supabaseUrl || !supabaseKey) {
      console.error('❌ Supabase credentials missing from .env!');
    }

    this.supabase = createClient(supabaseUrl || '', supabaseKey || '');
  }

  async getAll() {
    const { data, error } = await this.supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase Fetch Error:', error.message);
      throw error;
    }
    return data;
  }

  async create(entry: { name: string; message: string }) {
    const { data, error } = await this.supabase
      .from('guestbook')
      .insert([entry])
      .select();

    if (error) {
      console.error('Supabase Insert Error:', error.message);
      throw error;
    }
    return data[0];
  }

  async delete(id: string) {
    const { error } = await this.supabase
      .from('guestbook')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase Delete Error:', error.message);
      throw error;
    }
    return { deleted: true };
  }
}